import { useDispatch} from "react-redux"
import {deleteAsset,getAssets} from '../features/assets/assetSlice'
function AssetItem({asset}) {
  const dispatch = useDispatch()
  const onClick=()=>{
    dispatch(deleteAsset(asset._id))
    dispatch(getAssets())
  }
  return (
    
        
        <tr className='bg-white border-b-2 border-blue-500' >
          <td className='p-3 text-sm text-gray-700'>{asset.name}</td>
          <td className='p-3 text-sm text-gray-700'>{asset.value}</td>
          <td className='p-3 text-sm text-gray-700'>{asset.type}</td>
          <td className='p-3 text-sm text-gray-700'>{asset.description}</td>
          <td className='p-3 text-sm text-gray-700'>{asset.quantity}</td>
          <td className='p-3 text-sm text-gray-700'>
          {new Date(asset.createdAt).toLocaleString
            ('en-US')}     
          </td>
          <td className='p-3 text-sm text-gray-700'>
          <button className="bg-red-500 border-2 rounded-lg p-1 border-green-600" 
           onClick={onClick}>
            delete
        </button>
          </td>

          
          </tr>
    
  )
}

export default AssetItem