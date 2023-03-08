import * as Icons from 'react-bootstrap-icons'

function Footer() {
  return (
    <>
     <div className='block bg-black'>
    <div className='md:flex justify-around items-center md:divide-x md:divide-gray-300 text-white'>      
      <div className='m-2 md:m-5 p-5 text-left'>
         <h1 className='text-xl font-black'>Contacts</h1>
         <ul>
           <li className='text-pink-700 m-2'>phone: +254755995669</li>
           <li className='text-pink-700 m-2'>location: Nyeri Town</li>
           <li className='text-pink-700 m-2'>address: The Nyeri National Polytechnic</li>
           <li className='text-pink-700 m-2'>email: housefinder@thenyeripoly.ac.ke</li>
         </ul>
      </div>
      <div className='m-2 md:m-5 p-5 text-left'>
         <h1 className='text-xl font-black text-slate-500'> important links</h1>
         <ul>
          <li className='text-blue-800 m-2' >home</li>
          <li className=' text-blue-800 m-2'>about us</li>
          <li className=' text-blue-800 m-2'>contacts</li>
          <li className=' text-blue-800 m-2'>available houses</li>
          <li className=' text-blue-800 m-2'>feedback</li>
          <li className=' text-blue-800 m-2'>properties</li>
          
         </ul>


      </div>
      <div className='m-2 md:m-5 p-5 text-left'>
        <h1 className='text-xl  font-black'>Social media platforms</h1>
        <ul>
          <li className='flex text-center m-2'>{<Icons.Facebook style={{fontSize:'40px'}} 
          className="bg-blue-700 rounded-xl"/>} <h3 className='p-2'>house finder</h3></li>
          <li className='flex text-center m-2'>{<Icons.Instagram style={{fontSize:'40px'}}
          className='bg-pink-500 rounded-xl'/>} <h3 className='p-2'> house_finder </h3></li>
          <li className='flex text-center m-2'>{<Icons.Twitter style={{fontSize:'40px'}}
          className='bg-blue-500 rounded-xl'/>} <h3 className='p-2'> @house_finder </h3></li>
          <li className='flex text-center m-2'>{<Icons.Linkedin style={{fontSize:'40px'}}
          className='bg-blue-800 rounded-xl'/>} <h3 className='p-2'> house_finder01 </h3></li>
        

        </ul>

      </div>

      
        

    </div>
    <p className='bg-gray-700 text-white font-black'>&#169; Karani-ken All Rights Reserved</p>
  </div>

    </>
  )
}

export default Footer