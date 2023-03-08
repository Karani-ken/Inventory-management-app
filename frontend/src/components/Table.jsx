import AssetItem from "./AssetItem"


function Table({assets}) {
  return (
    <div className='flex justify-center items-center text-center'>
               
    <table className='w-[700px] m-5'>
        <thead className='bg-gray-500 border-b-2 border-gray-400'>
            <tr>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Name</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Value</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Type</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Description</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Quantity</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Date Added</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Action</th>
            </tr>
        </thead>
        <tbody>
                  {
                     assets.map((asset, key)=>{
                         return(
                            <AssetItem key={asset._id} asset={asset}/>
                                
                         )
                        
                     })
                 }
            
            
           
        </tbody>
    </table>
</div>
  )
}

export default Table