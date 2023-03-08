function AssetItem({asset}) {

  return (
    
        
        <tr className='bg-white border-b-2 border-blue-500' >
          <td className='p-3 text-sm text-gray-700'>{asset.name}</td>
          <td className='p-3 text-sm text-gray-700'>{asset.value}</td>
          <td className='p-3 text-sm text-gray-700'>{asset.type}</td>
          <td className='p-3 text-sm text-gray-700'>{asset.description}</td>
          <td className='p-3 text-sm text-gray-700'>
          {new Date(asset.createdAt).toLocaleString
            ('en-US')} 
          </td>

          
          </tr>
    
  )
}

export default AssetItem