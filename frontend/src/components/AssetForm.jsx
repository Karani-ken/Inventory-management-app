import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {createAsset} from '../features/assets/assetSlice'
function AssetForm() {
  const [formData, setFormData]= useState({
    name:'',
    value:'',
    description:''
  })
  const {name, value,description} = formData
  const dispatch = useDispatch()
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,

    }))
  }

    const onSubmit = e =>{
        e.preventDefault()
        const Asset={
          name,
          value,description
        }
        dispatch(createAsset(Asset))
        
    }
  return (
    <section  className=' m-3 p-5 flex items-center justify-center'>
      
        <form onSubmit={onSubmit} className='border-2 border-gray-100 h-[300px] 
        w-[300px] text-center items-center justify-center rounded-3xl'>
          <h1 className='m-3 p-5'>Add Asset</h1>
        <span className='mt-6'>               
                <p className='text-xl bg-rose-400 rounded-lg'></p>
                <div className='m-12 flex items-start flex-col justify-start space-y-3'>
                    <input type='text' placeholder='Name' name='name' id='name' value={name} className='rounded text-center border-gray-900 shadow-md shadow-black' 
                    onChange={onChange}  />
                    <input type='number' onChange={onChange} name='value' id='value' value={value} placeholder='Value' className='rounded text-center shadow-md shadow-black'  />
                    <input type='text' onChange={onChange} name='description' id='description' value={description} placeholder='Description' className='rounded text-center shadow-md shadow-black' />
                    
                </div>

                <div className="form-group ">
                    <button type='submit' className='btn btn-block'>
                        Submit
                      
                      </button>  
                </div>                
            </span>
        </form>
    </section>
  )
}

export default AssetForm