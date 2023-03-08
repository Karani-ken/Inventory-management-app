import AssetItem from "./AssetItem"

import { useDispatch} from "react-redux"
import {deleteAsset,getAssets} from '../features/assets/assetSlice'

function Table({ assets }) {
    const dispatch = useDispatch()
    return (
        <>
            <div className=' flex flex-col items-center justify-center md:hidden'>
                <div className='text-center'>
                    <h1 className='font-medium m-4 text-rose-400'>
                        Not all records are available from this device
                        

                    </h1>
                    <table className=' w-full mb-4'>
                        <thead className='bg-gray-500 border-b-2 border-gray-400'>
                            <tr>
                                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Name</th>
                                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Value</th>
                                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Type</th>
                                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                assets.map((asset, key) => {
                                    
                                    const onClick=()=>{
                                      dispatch(deleteAsset(asset._id))
                                      dispatch(getAssets())
                                    }
                                    return (
                                        <tr className='bg-gray-200' key={asset._id}>
                                            <td className='p-3 text-sm text-gray-700'>{asset.name}</td>
                                            <td className='p-3 text-sm text-gray-700'>{asset.value}</td>
                                            <td className='p-3 text-sm text-gray-700'>{asset.type}</td>
                                            <button className="bg-red-500 border-2 rounded-lg p-1 border-green-600"
                                                onClick={onClick}>
                                                delete
                                            </button>
                                        </tr>
                                    )

                                })
                            }



                        </tbody>
                    </table>
                </div>
            </div>
            <div className="md:block hidden">
            <table className='w-full '>
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
                        assets.map((asset, key) => {
                            return (
                                <AssetItem key={asset._id} asset={asset} />

                            )

                        })
                    }



                </tbody>
            </table>

            </div>
          


        </>


    )
}

export default Table