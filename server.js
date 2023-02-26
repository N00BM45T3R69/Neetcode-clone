const mongoose = require("mongoose")

const dotenv = require("dotenv")
dotenv.config()
const connstr = process.env.MONGO_CONN_STRING;
const express = require("express");//creating application



const app = express();//calling
mongoose.set('strictQuery', true);

mongoose.connect(connstr,function(err){ //connect to database
    if(err)
    console.err; // or console.log(err);
    else{
        console.log("DB Connection Successful");
        // We put this here because web server should only start after connection with database
        app.listen(3000,function(){
        console.log("Server running on http://localhost:3000")
        });
}
});

var name = "Abhiram"
//use nodemon server.js to run because it will dynamically update with changes
app.use(express.static("frontend"))

app.get("/",function(req,res){
    res.sendFile(__dirname+"frontend/index.html")
});

