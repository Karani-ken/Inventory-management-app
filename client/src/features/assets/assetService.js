 import axios from 'axios'

 const API_URL1 ='http://localhost:5000/api/assets/add'
 const API_URL2 ='http://localhost:5000/api/assets/getAll'

 //create asset

 const createAsset = async (assetData, token)=>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL1, assetData, config)
     
    
    return response.data
 }
 //get assets
 const getAssets = async (token)=>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL2, config)
     
    
    return response.data
 }

 const assetService ={
    createAsset,
    getAssets
 }
 export default assetService