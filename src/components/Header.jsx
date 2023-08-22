import React from 'react'
import logo from '../assets/ss.png'
import { AiOutlineShopping,AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <div className='bg-slate-200/50 py-3 px-8 h-16 sticky top-0 z-10  w-full flex justify-between'>
        <div className=''><img src={logo} alt="logo image" className='md:h-12 h-10  ' /></div>

        <div className=''>
            <ul className='flex md:py-2 justify-between gap-3 '>
                <li>Home</li>
                <li>Shop</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>

        <div className='flex gap-4  md:py-2'>
            <AiOutlineShopping  className='text-3xl'/>
            <AiOutlineUser className='text-3xl'/>

        </div>
    </div>
  )
}

export default Header