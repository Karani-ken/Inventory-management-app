const asyncHandler = require("express-async-handler")

const Asset = require('../models/assetModel')
const User = require('../models/userModel')
//desc Get assets
//@route GET /api/assets
//@access Private
const getAssets = asyncHandler ( async (req,res)=>{
   const assets = await Asset.find({user: req.user.id})

   res.status(200).json(assets)
})

//desc Set asset
//@route POST /api/assets
//@access Private
const addAsset = asyncHandler (async (req,res)=>{
    const {name, value,description} = req.body

    if(!name || !value || !description){
        res.status(400)
        throw new Error('All fields are required')
    }

    const asset = await Asset.create({
        name,
        value,
        description,
        user: req.user.id
    })

    res.status(200).json(asset)
})

//desc update asset
//@route PUT /api/assets
//@access Private
const updateAsset = asyncHandler( async (req,res)=>{
    const asset = await Asset.findById(req.params.id)
    if(!asset){
        res.status(400)
        throw new Error('Asset not found')
    }

    const user = await User.findById(req.user.id)

    //check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    //make sure the logged in user matches the goal user
    if(asset.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedAsset = await Asset.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
    })

    res.status(200).json(updatedAsset)
})

//desc Delete asset
//@route DELETE /api/assets
//@access Private
const deleteAsset = asyncHandler (async (req,res)=>{
    const asset = await Asset.findById(req.params.id)
    if(!asset){
        res.status(400)
        throw new Error('Asset not found')
    }

    const user = await User.findById(req.user.id)
     //check for user
     if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    //make sure the logged in user matches the goal user
    if(asset.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    await asset.remove()

    res.status(200).json({id: req.params.id})
})

module.exports ={
    getAssets,
    addAsset,
    updateAsset,
    deleteAsset
}