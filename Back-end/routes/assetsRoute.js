const express = require('express');
const router = express.Router();

//get assets
router.get('/', (req,res)=>{
    res.status(200).json({message:'Get assets'})
})

//add assets
router.post('/add', (req,res)=>{
    res.status(200).json({message:'add assets'})
})

//update assets
router.put('/update/:id', (req,res)=>{
    res.status(200).json({message:`Update asset ${req.params.id}`})
})

//delete assets
router.delete('/delete/:id', (req,res)=>{
    res.status(200).json({message:`delete asset ${req.params.id}`})
})

module.exports = router

