const express = require("express");
const router =require("./src/routes/api.js")
const app = express();
//if body parser needed
const bodyParser = require("body-parser");
const path= require('path');


//Security Middleware
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");


const mongoSanitize = require("express-mongo-sanitize");
// const xss=required("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//Database lib import
const mongoose = require("mongoose");

// Mongo DB Database Connection
let URI="mongodb+srv://<username>:<password>@cluster0.4uce0mp.mongodb.net/STUDENT";
let OPTION={user:'afrinasha217',pass:'afrin123',autoIndex:true}
mongoose.connect(URI,OPTION).then((res)=>{
    console.log("Database Connected Successfully");
}).catch((err)=>{
    console.log(err);
})

//security middleware Implement
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());
app.use(hpp())


//Body parser
app.use(bodyParser.json());

//tagging
app.use(express.static('client/build'));
app.get('*',function(req,res){
    req.sendFile(path.resolve(__dirname,'client','build','index.html'));
});

app.use("/api/v1",router);

module.exports =app;