import React from 'react'
import {Link} from "react-router-dom";

function Landing(props) {
    document.title=`Cropventure - ${props.title}`
  return (
        <div className=" bg-[url('https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2019/09/30/102046-agri-re.JPG?itok=_F7696tv')] h-[90vh] bg-cover bg-no-repeat bg-center">
        <div className='h-full bg-[rgba(0,0,0,0.7)] mx-auto'>
            <div className='grid grid-rows-2 grid-cols-1 text-center pt-40'>
            <h1 className='text-7xl text-white'>Welcome to <span className='text-yellow-500 font-bold text-7xl'>CropVenture</span></h1>
            <div className='flex flex-nowrap justify-center mt-10'>
                <Link className='inline w-50 py-3 px-2 text-2xl bg-green-700 border-2 border-transparent hover:border-white hover:text-white hover:bg-green-900 rounded-sm' to='/retailer'>Become an Associated Retailer</Link>
            <span className='text-2xl font-bold text-white mx-3 py-3'>OR</span>
            <Link className='inline w-50 py-3 px-2 bg-green-700 border-2 border-transparent hover:border-white text-2xl hover:text-white hover:bg-green-900 rounded-sm' to="/farmer">Become an Associated Farmer</Link>
                </div>
        </div>
        </div>
            </div>
        
  )
}

export default Landing
