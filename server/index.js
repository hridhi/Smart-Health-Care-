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
    
    if (username && password) 
    {
        db.query('SELECT * FROM login_details WHERE l_usern = ? AND l_pass = ?', [username, password], function(error, results, fields)
        {
            if (results.length > 0) 
            {
                res.send('SUCCESS..');
            } 
            else 
            {
				res.send('Incorrect Username and/or Password!');
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

app.post("/d_login_chk",(request,res)=>{
    const username=request.body.username;
    const password=request.body.pass;
    
    if (username && password) 
    {
        db.query('SELECT * FROM login_details WHERE l_usern = ? AND l_pass = ?', [username, password], function(error, results, fields)
        {
            
            
            if (results.length > 0) 
            {
                var l_cat = JSON.stringify(results[0].l_category)
                l_cat = l_cat.replace(/^"(.*)"$/, '$1')
                if(l_cat=='staff')
                {
                    res.send('SUCCESS..');
                }
                else
                {
                    res.send('Incorrect Username and/or Password!');
                }
            } 
            else 
            {
				res.send('Incorrect Username and/or Password!');
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
app.post("/d_login_chk",(request,res)=>{
    const username=request.body.username;
    const password=request.body.pass;
    
    if (username && password) 
    {
        db.query('SELECT * FROM login_details WHERE l_usern = ? AND l_pass = ?', [username, password], function(error, results, fields)
        {
            
            
            if (results.length > 0) 
            {
                var l_cat = JSON.stringify(results[0].l_category)
                l_cat = l_cat.replace(/^"(.*)"$/, '$1')
                if(l_cat=='doctor')
                {
                    res.send('SUCCESS..');
                }
                else
                {
                    res.send('Incorrect Username and/or Password!');
                }
                
            } 
            else 
            {
				res.send('Incorrect Username and/or Password!');
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

app.post("/make-appoinment",(req,res)=>
{
    const pid4 = req.body.pid4;
    desp = req.body.desp;
    const time = req.body.time;
    const date=req.body.date;
    const br_id = req.body.br_id; 
    const spe = req.body.spe;
    var d_id1 = new Array();
    var d_id2 = new Array();
    var d_id3 = new Array();
    var n1,n2;
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
    db.getConnection(function(err) 
    {
        db.query("select * from doctor where d_specialization=? and br_id=?;", [spe,br_id],function (err,result) 
        {
            if(result.length>0)
            {
                var n = result.length;
                n1 =n;
                var i;
                
                for(i=0;i<n;i++)
                {
                    d_id1[i] = JSON.stringify(result[i].d_id);
                }
                console.log('1:--'+d_id1);
            }
            else
            {
                res.send('Please enter a valid specialization.')
            }
            db.query("select d_id from appointments where app_time=? and app_date=?;", [time, date],function (err,result) 
        {
            if(result.length>0)
            {
                var n = result.length;
                var i;
                n2=n;
                for(i=0;i<n;i++)
                {
                    d_id2[i] = JSON.stringify(result[i].d_id);
                }
                console.log('2:--'+d_id2);
            }
            var i,j,k=0,flag=0;
            for(i=0;i<n1;i++)
            {
                for(j=0;j<n2;j++)
                {
                    if(d_id1[i]==d_id2[j])
                    {
                        flag=1;
                        break;
                    }
                }
                if(flag==0)
                {
                    d_id3[k++] = d_id1[i];
                }
                flag=0;
            }
            console.log('3:--'+d_id3)
            if(d_id3.length>0)
        {
            db.query("update appointments set d_id = ? where app_time=? and app_date=? and p_id=?;", [d_id3[0],time,date,pid4],function (err,result) 
            {
                console.log('did3'+d_id3)
                res.send(`Your appointment is successfully set with doctor ${d_id3[0]}`);
            })
        }
        else
        {
            res.send('No doctors are available in this slot')
        }
        })
         
        });//query ending
        
        
    });//connector ending
    
})
app.post("/test_report",(req,res)=>
{
    const pid5 = req.body.pid5;

    db.getConnection(function(err) 
    {
        db.query("select * from test_report where p_id=(?)", [pid5],function (err,result) 
        {
            test_name = JSON.stringify(result[0].test_name);
            test_doc = JSON.stringify(result[0].test_doc);
            test_category = JSON.stringify(result[0].test_category);
            
               const details = res.json({
                    test_name:[test_name.replace(/^"(.*)"$/, '$1')],
                    test_category:[test_category.replace(/^"(.*)"$/, '$1')],
                    test_details:[test_doc.replace(/^"(.*)"$/, '$1')]
                })
               res.send(`${details}`)
             
        });
    });
})
app.post("/med_his",(req,res)=>
{
    const pid6 = req.body.pid6;
    db.getConnection(function(err) 
    {
        db.query("select * from med_history where p_id=(?)", [pid6],function (err,result) 
        {
            console.log(result);
            med_allergy = JSON.stringify(result[0].med_allergy);
            med_current= JSON.stringify(result[0].med_current);
            med_past = JSON.stringify(result[0].med_past);
            pr_id = JSON.stringify(result[0].pr_id);
            
               const details = res.json({
                    med_allergy:[med_allergy.replace(/^"(.*)"$/, '$1')],
                    med_current:[med_current.replace(/^"(.*)"$/, '$1')],
                    med_past:[med_past.replace(/^"(.*)"$/, '$1')],
                    pr_id:[pr_id]
                })
                
               res.send(`${details}`)
                
                    
            
            
        });
    });
})
app.post("/ins",(req,res)=>
{
    const pid7 = req.body.pid7;
    db.getConnection(function(err) 
    {
        db.query("select * from insurance where p_id=(?)", [pid7],function (err,result) 
        {
            console.log(result);
            ins_id = JSON.stringify(result[0].ins_id);
            ins_name= JSON.stringify(result[0].ins_name);
            ins_category = JSON.stringify(result[0].ins_category);
            
               const details = res.json({
                ins_id:[ins_id.replace(/^"(.*)"$/, '$1')],
                ins_name:[ins_name.replace(/^"(.*)"$/, '$1')],
                ins_category:[ins_category.replace(/^"(.*)"$/, '$1')],
                })
                
               res.send(`${details}`)
                
                    
            
            
        });
    });
})
app.post("/chk-inv",(req,res)=>
{
    const brid= req.body.brid;
    const eqid= req.body.eqid;
    db.getConnection(function(err) 
    {
        db.query("select * from inventory where eq_id=(?) and br_id=(?)", [eqid,brid],function (err,result) 
        {
            console.log(result);
            eq_status = JSON.stringify(result[0].eq_status);
            eq_no= JSON.stringify(result[0].eq_no);
            eq_name= JSON.stringify(result[0].eq_name);
           
            const details = res.json(
                {
                eq_no:[eq_no.replace(/^"(.*)"$/, '$1')],
                eq_status:[eq_status.replace(/^"(.*)"$/, '$1')],
                eq_name:[eq_name.replace(/^"(.*)"$/, '$1')],
                })
               res.send(`${details}`)
        });
    });
})

app.post("/pharm",(req,res)=>
{
    const med_id= req.body.med_id;
    const br_id= req.body.br_id;
    db.getConnection(function(err) 
    {
        db.query("select * from medicine where med_id=(?) and br_id=(?)", [med_id,br_id],function (err,result) 
        {
            console.log(result);
            med_name = JSON.stringify(result[0].med_name);
            med_availability= JSON.stringify(result[0].med_status);
            med_category= JSON.stringify(result[0].med_category);
            med_price= JSON.stringify(result[0].med_price);
           
            const details = res.json(
                {
                med_name:[ med_name.replace(/^"(.*)"$/, '$1')],
                med_availability:[med_availability.replace(/^"(.*)"$/, '$1')],
                med_category:[ med_category.replace(/^"(.*)"$/, '$1')],
                med_price:[ med_price.replace(/^"(.*)"$/, '$1')],
                })
               res.send(`${details}`)
        });
    });
})

app.listen(3001,()=>{
    console.log('running on port 3000');
})