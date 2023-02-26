const express = require("express");//creating application

const app = express();//calling
var name = "Abhiram"
//use nodemon server.js to run because it will dynamically update with changes
app.use(express.static("frontend"))

app.get("/",function(req,res){
    res.sendFile(__dirname+"frontend/index.html")
});

app.listen(3000,function(){
console.log("Server running on http://localhost:3000")
});
