import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {createAsset} from '../features/assets/assetSlice'
function AssetForm() {
  const [formData, setFormData]= useState({
    name:'',
    value:'',
    type:'',
    description:''
  })
  const [message, setMessage] = useState('')
  const {name, value,type,description} = formData
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
          description
        }
        dispatch(createAsset(Asset))        
        setMessage("Added Successfully")
        navigate('/')
        
    }
  return (
    <section className='w-[700px] m-5 p-5 shadow-md shadow-green-400'>
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
      </div>
      <div className='form-group'>
        <button className='btn btn-block' type='submit'>
          Add Asset
        </button>
      </div>
    </form>
  </section>
  )
}

export default AssetForm