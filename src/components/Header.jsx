import React from 'react'
import logo from '../assets/ss.png'
import { AiOutlineShopping,AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <div className='bg-slate-200/50 py-3 px-8 h-16  top-0 z-10  w-full flex justify-between'>
        <div className=''><img src={logo} alt="logo image" className='md:h-12 h-10  ' /></div>

        <div className=' hidden md:block'>
            <ul className='flex text-flame  md:py-2 justify-between gap-3 '>
                <li className='hover:text-lapis'>Home</li>
                <li className='hover:text-lapis'>Shop</li>
                <li className='hover:text-lapis'>About Us</li>
                <li className='hover:text-lapis'>Contact Us</li>
            </ul>
        </div>

        <div className='md:flex gap-4 hidden  md:py-2'>
            <AiOutlineShopping  className='text-3xl text-lapis'/>
            <AiOutlineUser className='text-3xl text-flame'/>

        </div>
    </div>
  )
}

export default Header