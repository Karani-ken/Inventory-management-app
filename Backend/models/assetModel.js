const mongoose = require('mongoose')

const assetSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name:{
        type: String,
        required:[true, 'please add a text value']
    },
    value:{
        type: String,
        required:[true, 'please add the price']      
    },
    type:{
        type: String,
        required:[true, 'please add the price']
    },
    description:{
        type:String,
        required:[true, 'please add the description']
    }
    ,
    quantity:{
        type:String,
        required:[true, 'please add the quantity']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Asset', assetSchema)