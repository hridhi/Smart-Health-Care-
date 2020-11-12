const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

var router = express.Router()

var url = require('url');
var br_id;
var l_id=0;
var pid;
var pr_id1;
var pid2;
var ts_id1;
var pid3;
var desp;
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"hospital"
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.post("/api/insert",(req,res)=>{
    const name = req.body.name1;
    const address=req.body.address;
    const city=req.body.city;
    const pincode=req.body.pincode;
    const contact_number=req.body.cont_no;
    const state=req.body.state;
    const username=req.body.username;
    const password=req.body.pass;
    const renter_password=req.body.pass_chk;
    const age=req.body.age;

    if(password==renter_password)
    {
        const insert_login = "insert into login_details(l_usern,l_pass,l_category) values (?,?,'patient')";
    db.query(insert_login,[username,password],(err,result)=>{
        console.log(result);
    })
    
    
    
    db.getConnection(function(err) {
        db.query("SELECT l_id FROM login_details where l_usern=?", [username],function (err,result) {
            l_id = JSON.stringify(result[0].l_id)
            console.log('lid: '+l_id);
            
       });
      });
      db.getConnection(function(err) {
        db.query("SELECT br_id FROM branches where br_city=?",[city], function (err,result) {
            br_id = JSON.stringify(result[0].br_id)
            console.log('br: '+ br_id );
            const insert_patient = "insert into patient_details (p_name,p_age,p_phone,p_city,p_state,p_zip,p_street_name,br_id,l_id) values (?,?,?,?,?,?,?,?,?)";
            db.query(insert_patient,[name,age,contact_number,city,state,pincode,address,br_id,l_id],(err,result)=>{
            console.log(result);})
       });
      }); 
    }
    else
    {
        console.log('Password mismatched !!...')
    } 
})
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.post("/api/login_chk",(request,res)=>{
    const username=request.body.username;
    const password=request.body.pass;
    console.log('hello')
    if (username && password) 
    {
        db.query('SELECT * FROM login_details WHERE l_usern = ? AND l_pass = ?', [username, password], function(error, results, fields)
        {
            if (results.length > 0) 
            {
                router.get('/user_home',function (req,res,next) 
                {
                    db.getConnection(function(err) 
                    {
                    db.query("SELECT l_id FROM login_details where l_usern=?", [username],function (err,result)
                    {
                        l_id = JSON.stringify(result[0].l_id)
                        console.log('lid: '+l_id);   
                    });
                    db.query("SELECT * FROM patient_details where l_id=?", [l_id],function (err,result) 
                    {
                        //p_details = JSON.stringify(result[0].l_id)
                        console.log('lid: '+result);
                    });
                    /*res.json([
                    {
                    }
                    ])*/
                });
                })
            } 
            else 
            {
				res.status(403).send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
    }
    else 
    {
		res.send('Please enter Username and Password!');
		res.end();
	}
}) 
app.post("/insert_p_med_his",(req,res)=>
{
    pid = req.body.pid;
    const allergy = req.body.allergy;//
    const reaction=req.body.reaction;//med_past
    const surgery=req.body.surgery;//med_past
    const medicine=req.body.medicine;//med_past
    const duration=req.body.duration;//med_past
    const med_det=req.body.med_det;//med_past
    const eat=req.body.eat;//med_past
    const workout=req.body.workout;//med_past

    let med_past ="Reaction: "+reaction+" Past surgeries: "+surgery+" Medicines taken in the past "+medicine+" Duration of the medicines taken: "+duration+" medcication detials: "+med_det+" Eating habits: "+eat+" Workout details: "+workout;
    let med_allergy =" Allergies to medicines: "+allergy;
    console.log(med_allergy)
    console.log(med_past)
    db.getConnection(function(err) 
    {
        db.query("insert into med_history(p_id,med_allergy,med_past) values (?,?,?);", [pid,med_allergy,med_past],function (err,result) 
        {
            //l_id = JSON.stringify(result[0])
            console.log('lid: '+result);   
        });
    });
})
app.post("/med_current",(req,res)=>
{
    pid1 = req.body.pid1;
    const symp = req.body.symp;
    const reaction=req.body.diagnosis;
    const admt=req.body.admt;
    const pres=req.body.pres;
    var med_current="Symptoms: "+symp+", Medicine side effects: "+reaction+", status: "+admt+", Prescription: "+pres;
    db.getConnection(function(err) 
    {
        db.query("update med_history set med_current= (?) where p_id=(?) ;", [med_current,pid1],function (err,result) 
        {
            //l_id = JSON.stringify(result[0])
            //console.log('lid: '+result);   
        });
    });
    db.getConnection(function(err) 
    {
        db.query("insert into prescription(pr_status,p_id) values ('active',?);", [pid1],function (err,result) 
        {
            //l_id = JSON.stringify(result[0])
            //console.log('lid: '+result);   
        });
    });
    db.getConnection(function(err) 
    {
        db.query("select pr_id from prescription where p_id=(?)",[pid1],function (err,result) 
        {
            pr_id1 = JSON.stringify(result[0].pr_id);
        });
    });
    db.getConnection(function(err) 
    {
        db.query("update med_history set pr_id= (?) where p_id=(?) ;", [pr_id1,pid1],function (err,result) 
        {
            //l_id = JSON.stringify(result[0])
            //console.log('lid: '+result);   
        });
    });
})
app.post("/submit_tst_report",(req,res)=>
{
    
      pid2 = req.body.pid2;
    const tst_name = req.body.tst_name;
    const tst_category=req.body.tst_category;
    const tst_det=req.body.tst_det;
    
    
    db.getConnection(function(err) 
    {
        db.query("select ts_id from tests where ts_name=(?)",[tst_name],function (err,result) 
        {
            ts_id1 = JSON.stringify(result[0].ts_id);
            console.log('ts_id',ts_id1);
        });
    });
    db.getConnection(function(err) 
    {
        db.query("insert into test_report (test_name,test_doc,ts_id,test_category,p_id) values (?,?,?,?,?);", [tst_name,tst_det,ts_id1,tst_category,pid2],function (err,result) 
        {
            //l_id = JSON.stringify(result[0])
            //console.log('lid: '+result);   
        });
    });
})
app.post("/pay_det",(req,res)=>
{
    pid3 = req.body.pid3;
    const pay_amt = req.body.pay_amt;
    const pay_status=req.body.pay_status;
    const pay_date=req.body.pay_date;
    const pay_method=req.body.pay_method;

    db.getConnection(function(err) 
    {
        db.query("insert into payments(pay_amount,pay_status,pay_date,pay_method,p_id) values (?,?,?,?,?);", [pay_amt,pay_status,pay_date,pay_method,pid3],function (err,result) 
        {
            console.log('lid: '+result);
        });
    });
})
app.post("/make_app",(req,res)=>
{
    const pid4 = req.body.pid4;
    desp = req.body.desp;
    const time = req.body.time;
    const date=req.body.date;
    const brid = req.body.br_id; 
    console.log('hello'+br_id);
    db.getConnection(function(err) 
    {
        db.query("insert into appointments(app_time,app_date,descp,p_id) values (?,?,?,?);", [time,date,desp,pid4],function (err,result) 
        {
            console.log('lid: '+result);
            if(err)
            {
                console.log(err)
            }
        });
    });
})
app.post("/test_report",(req,res)=>
{
    const pid5 = req.body.pid5;

    db.getConnection(function(err) 
    {
        db.query("select * from test_report where p_id=(?)", [pid5],function (err,result) 
        {
            test_id = JSON.stringify(result[0].test_id);
            test_name = JSON.stringify(result[0].test_name);
            test_doc = JSON.stringify(result[0].test_doc);
            test_category = JSON.stringify(result[0].test_category);
            exports.test_details = (req,res)=>
            {
                res.json({
                    "test name":[test_name],
                    "test category":[test_category],
                    "test details":[test_doc],
                })
            }
                
            console.log('lid: '+result);

            
        });
    });
})
app.listen(3001,()=>{
    console.log('running on port 3000');
})
