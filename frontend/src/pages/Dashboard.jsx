import { useEffect } from "react"
import {useNavigate,Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import AssetForm from "../components/AssetForm"

import Spinner from '../components/Spinner'
import { getAssets, reset } from "../features/assets/assetSlice"
import Table from "../components/Table"

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state)=> state.auth)
  const {assets, isLoading, isError, message} = useSelector((state)=>
    state.assets)
    useEffect(()=>{
      if(isError){
        console.log(message);
      }
      if(!user){
        navigate('/login')
      }

      dispatch(getAssets())
      return () =>{
        dispatch(reset())
      }
    },[user, navigate,isError, message, dispatch])

    if(isLoading){
      return  <Spinner/>
    }           
  return (
   <>
       <section className="w-full p-3">
        <h1>Welcome to Farmer's Dashboard</h1>
        <div className="flex justify-around">
        <button>
          <Link to='/addasset'>
            Add asset
          </Link>
        </button>
        <button>
          <Link to='/addasset'>
            Edit asset
          </Link>
        </button>
        <button>
         Delete asset
        </button>
        </div>
        
       </section>
       
       <section className="content">
          {assets.length > 0 ? (
            <div className="goals">
             
                  
                  < Table  assets={assets}/>
            </div>
          ) : (<h3> You have no assets</h3>)
          
        }
       </section>
   </>
  )
}

export default Dashboard