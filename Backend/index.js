const express = require("express");
const bodyParser = require("body-parser")
const dotenv = require('dotenv').config();
const cors = require("cors");
const userRouter = require('./routes/userRoute')
const assetsRouter = require('./routes/assetsRoute')
const db = require('./db/db')
const app = express();   
          
 app.use(cors());
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}))    

 
 const port = process.env.PORT 
 app.listen(port,()=>{   
    console.log(`server is running on port: ${port}`);
 })
 app.use('/api/users', userRouter)  
 app.use('/api/assets', assetsRouter)      