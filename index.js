let express = require("express");
let mysql = require('mysql');
let bodyparser=require("body-parser");
let app = express();
app.use(bodyparser.json());


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodecurdapi"
  });


app.post("/users",(req,res)=>{
console.log(req.body);
let body=req.body;
let query ="INSERT INTO users(name,email,mobileno)";
query += "VALUES(' "+body.name +"','"+body.email +" ',' "+body.mobileno +"')";
con.query(query,(err,result)=>{
    
    if(err){
        res.end("something went wrong");
    }
    res.end("success");
})

})




app.put("/users",(req,res)=>{
console.log(req.body);
let id=req.params.id;
let query ="UPDATE users SET NAME='"+body.name +"',";
query += "email='"+body.email +"',";
con.query(query,(err,result)=>{
    
    if(err){
        res.end("something went wrong");
    }
    res.end("success");
})

})







app.get("/",(req,res)=>{
    res.end("Welcome to API");
});
app.listen(8081,()=>{
    console.log("API running on http://localhost:8081");
})