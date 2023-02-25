const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const useRouter = require('./routes/userRoute')
const app = express();
 const corsOptions = {
    origin:"http://localhost:3000"
 }

 app.use(cors(corsOptions));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}))

 app.get('/',(req,res)=>{
        res.json({message:"welcome to fmis"});
 })
 const PORT = process.env.PORT  || 4000
 app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
 })
 app.use('/api', useRouter)