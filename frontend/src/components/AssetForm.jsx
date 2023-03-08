import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate,Link} from 'react-router-dom'
import {createAsset} from '../features/assets/assetSlice'
function AssetForm() {
  const [formData, setFormData]= useState({
    name:'',
    value:'',
    type:'',
    description:'',
    quantity:''
  })
  const [message, setMessage] = useState('')
  const {name, value,type,description,quantity} = formData
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
          value,
          type,
          description,
          quantity
        }
        dispatch(createAsset(Asset))        
        setMessage("Added Successfully")
        navigate('/')
        
    }
  return (
    <div className='min-h-screen flex items-center justify-center'>
    <section className='w-[700px] m-5 p-5 shadow-md shadow-green-400 flex justify-center items-center'>
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label htmlFor='text'>Asset</label>
        <p text>{message}</p>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={onChange} 
          placeholder="asset name"
        />
         
         <input
          type='number'
          name='value'
          id='value'
          value={value}
          onChange={onChange} 
          placeholder="asset value"
        />
         <input
          type='text'
          name='type'
          id='type'
          value={type}
          onChange={onChange} 
          placeholder="asset type"
        />
        <input
          type='text'
          name='description'
          id='description'
          value={description}
          onChange={onChange} 
          placeholder="asset description"
        />
        <input
          type='number'
          name='quantity'
          id='quantity'
          value={quantity}
          onChange={onChange} 
          placeholder="asset quantity"
        />
      </div>
      <div className='form-group'>
        <button className='btn btn-block' type='submit'>
          Add Asset
        </button>
        <button className='btn btn-block'>
          <Link to='/' className='text-white'>
            Back
          </Link>
          
        </button>
      </div>
    </form>
  </section>
  </div>
  )
}

export default AssetForm