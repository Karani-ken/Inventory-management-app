const express = require('express');
const router = express.Router();
const {
    getAssets,
    addAsset,
    updateAsset,
    deleteAsset,
}= require('../controllers/assetsController')

const {protect} = require('../middleware/authMiddleware')


//get assets
router.get('/getAll', protect, getAssets)
   

//add assets
router.post('/add', protect, addAsset)
  

//update assets
router.put('/update/:id', protect, updateAsset )
   

//delete assets
router.delete('/delete/:id', protect, deleteAsset)

module.exports = router

