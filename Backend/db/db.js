const mongoose = require('mongoose')

let mongoURL= process.env.MONGO_URI
mongoose.connect(mongoURL)
let db= mongoose.connection;

db.on('connected', ()=>{     
    console.log(`Mongo db connected successfully`)  
});

db.on('error',()=>{   
    console.log('Mongo db connection failed')
})

module.exports = mongoose