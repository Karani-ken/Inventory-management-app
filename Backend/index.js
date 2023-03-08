const path = require('path')
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

 app.use('/api/users', userRouter)  
 app.use('/api/assets', assetsRouter)      
 
 //serve
 if(process.env.NODE_ENV === 'production'){
   app.use(express.static(path.join(__dirname, '../frontend/build')))
   app.get('*', (req,res)=> res.sendFile(__dirname,'../','frontend','build',
   'index.html'))
 }else{
   app.get('/',(req, res)=> res.send('please set to production'))
 }
 app.listen(port,()=>{   
   console.log(`server is running on port: ${port}`);
})