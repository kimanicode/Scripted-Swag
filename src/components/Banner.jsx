import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import product1 from '../assets/hoodie.png'

const Banner = () => {
  return (
    <div className='p-6 md:m-10 m-5 rounded-2xl bg-orangeweb/50 flex md:justify-between justify-center h-[300px] '>
        <div className='p-3 basis-2/3 flex flex-col justify-center' >

           <div>
           <h1 className='md:text-6xl text-xl font-bold'> Are you ready to <br/> <span className='text-polygreen'>wear your code? </span></h1>

            <p className='py-3'> Your code defines your work, let your swag define your style</p>

           </div>
              
            <div className='text-center'>
            <button className='flex   gap-2 py-3  px-5 rounded-full bg-flame hover:transition-all hover:bg-flame/50'>Discover                                      <AiOutlineArrowRight className='h-6 '/></button>
            </div>


        </div>
        <div className='basis-1/3 md:flex hidden'>
            <img src={product1}  alt="" className='h-full' />

        </div>
    </div>
  )
}

export default Banner