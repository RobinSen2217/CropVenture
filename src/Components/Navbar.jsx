import React from 'react'
import {Link} from "react-router-dom";
  

function Navbar() {
  return (
    <div>
        <header className="text-gray-600 body-font bg-green-500 h-[10vh]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Link className="ml-3 text-2xl text-yellow-500 font-bold" to='/'>CropVenture</Link>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-300	flex flex-wrap items-center text-base justify-center">
      
      <details className="dropdown dropdown-end">
  <summary className="mr-5 btn text-white hover:cursor-pointer hover:text-gray-900">Serivces</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-44 absolute bg-white">
    <Link to='retailer'><li className='text-black hover:cursor-pointer '>Associate Retailing</li></Link>
    <hr />
    <Link to='farmer'><li className='text-black hover:cursor-pointer'>Associate Farming</li></Link>
    {/* <hr /> */}
    {/* <Link to=''><li className='text-black hover:cursor-pointer'>Machine on Rent</li></Link> */}
  </ul>
</details>
      <Link className="mr-5 hover:text-gray-900 hover:cursor-pointer text-white" to='/about'>About Us</Link>
      <Link className="mr-5 hover:text-gray-900 hover:cursor-pointer text-white" to='/consult'>Expert Consultancy</Link>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Navbar
