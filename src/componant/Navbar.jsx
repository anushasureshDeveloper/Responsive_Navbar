import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [extendedNavbar,setExtend]=useState(false)
  return (
   <nav className=' py-6 bg-gray-800 text-white h-20'>
   <div className='max-w-7xl mx-auto flex justify-between h-full items-center px-4'>
<h1 className='text-white text-4xl font-poppins font-extrabold mx-2 hover:text-purple-700'>Logo</h1>
<div className='flex gap-6 text-xl'>
    <ul className={`lg:static gap-6 text-white bg-gray-800 top-20 px-7 py-6 flex flex-col lg:flex-row font-bold absolute duration-700 ${extendedNavbar ? "top-26 right-0": "top-26 right-[-200px]" }`} >
    <li className='mx-2 hover:text-purple-700'>Docs</li>
    <li className='mx-2 hover:text-purple-700'>Home</li>
    <li className='mx-2 hover:text-purple-700'>About</li>
    <li className='mx-2 hover:text-purple-700'>Career</li>
    <li className='mx-2 hover:text-purple-700'>Contact</li>
    <li className='mx-2 hover:text-purple-700'>SignUp</li>
   
   </ul>
   </div>
   
  <div className='cursor-pointer lg:hidden' onClick={()=>setExtend(open=>!open)}>
{
    extendedNavbar?<MenuIcon className='mr-2'/>:
    <CloseIcon className='mr-2'/>
}
</div>
   </div>
   
   
   </nav>
  )
}

export default Navbar