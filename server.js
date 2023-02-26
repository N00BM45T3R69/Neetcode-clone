const express = require("express");//creating application

const app = express();//calling
var name = "Abhiram"

app.use(express.static("frontend"))

app.get("/",function(req,res){
    res.sendFile("Hello World!")
});
app.get("/index",function(req,res){
    res.sendFile(__dirname+"frontend/index.html")
});

app.get("/myname",function(req,res){
    res.send(`My name is ${name}`)
});

app.listen(3000,function(){
console.log("Server running on http://localhost:3000")
});
