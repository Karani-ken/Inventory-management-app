import { useEffect } from "react"
import {useNavigate,Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'


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
   <div className="h-[80vh] overflow-auto ">
       <section className="w-full p-1 md:p-3 shadow-sm shadow-gray-700 bg-gray-500 ">
        <h1 className=" text-sm md:font-black md:text-3xl">Dashboard</h1>
        <div className="flex justify-around">
        <button className="bg-emerald-500 border-2 rounded-lg p-1 border-red-300" >
          <Link to='/addasset' >
            Add asset
          </Link>
        </button>       
       
        </div>
        
       </section>
       
       <div className=' bg-gray-100'>
        <h1 className="text-sm md:font-black md:text-3xl">All assets</h1>
       {assets.length > 0 ? (
            <div className="shadow-lg rounded-lg shadow-black p-3">
             
                  
                  < Table  assets={assets}/>
            </div>
          ) : (<h3> You have no assets</h3>)
          
        }

       </div>
        
       
   </div>
  )
}

export default Dashboard