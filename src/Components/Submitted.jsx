import React from 'react'
import { Link } from 'react-router-dom'

function Submitted() {
  return (
    <div className='flex justify-center items-center h-[90vh] w-full bg-gray-100'>
      <div className='grid grid-cols-1 bg-white h-[60vh] w-[40vw] mx-auto text-center px-7 py-7 rounded-md shadow-2xl'>
        <img src="https://clipart-library.com/new_gallery/131-1314108_validation-circle-green-check-png.png" className='h-52 w-52 mx-auto' alt="tick"/>
        <h1 className='text-green-600 font-bold text-3xl'>Thank You!</h1>
        <p>Your form has been submitted successfully.You'll be contacted soon.</p>
        <Link to="/" className='text-green-500 underline'>Return to home page</Link>
      </div>
    </div>
  )
}

export default Submitted
