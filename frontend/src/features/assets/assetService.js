 import axios from 'axios'

 const API_URL ='http://localhost:5000/api/assets/add'

 //create asset

 const createAsset = async (assetData, token)=>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, assetData, config)
     
    
    return response.data
 }

 const assetService ={
    createAsset
 }
 export default assetService