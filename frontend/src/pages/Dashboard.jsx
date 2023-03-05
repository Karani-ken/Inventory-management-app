import { useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import AssetForm from "../components/AssetForm"

function Dashboard() {
  const navigate = useNavigate()

  const {user} = useSelector((state)=> state.auth)
    useEffect(()=>{
      if(!user){
        navigate('/login')
      }
    },[user, navigate])
  return (
   <>
       <section className="w-full bg-emerald-100 p-3">
        <h1>Welcome to Farmer's Dashboard</h1>
       </section>
       <AssetForm/>
   </>
  )
}

export default Dashboard