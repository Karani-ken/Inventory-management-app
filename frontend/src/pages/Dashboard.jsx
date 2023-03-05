import { useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import AssetForm from "../components/AssetForm"
import AssetItem from "../components/AssetItem"
import Spinner from '../components/Spinner'
import { getAssets, reset } from "../features/assets/assetSlice"

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
       <section className="w-full bg-emerald-100 p-3">
        <h1>Welcome to Farmer's Dashboard</h1>
       </section>
       <AssetForm/>
       <section className="content">
          {assets.length > 0 ? (
            <div className="goals">
              { assets.map((asset) =>{
                return < AssetItem key={asset._id}/>
              })
              }
            </div>
          ) : (<h3> You have no assets</h3>)
          
        }
       </section>
   </>
  )
}

export default Dashboard