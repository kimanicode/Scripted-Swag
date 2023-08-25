import React, { useState } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import product7Image from '../assets/tech.png';
import product6Image from '../assets/backpack.png';
import product9Image from '../assets/sweatshirt.png';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Banner = () => {
  const carouselContent =[
    <div className='p-6 md:m-10 m-5 rounded-2xl bg-orangeweb/50 flex md:justify-between justify-center h-[300px] '>
        <div className='p-3 basis-2/3 flex flex-col items-center' >

           <div>
           <h1 className='md:text-6xl text-xl font-bold'> Are you ready to <br/> <span className='text-polygreen'>wear your code? </span></h1>

            <p className='py-3'> Your code defines your work, let your swag define your style</p>

           </div>
              
            <div className='text-center py-2'>
            <button className='flex text-aliceblue  gap-2 py-3  px-5 rounded-full bg-flame hover:transition-all hover:bg-flame/50'>Discover<AiOutlineArrowRight className='h-6 '/></button>
            </div>


        </div>
        <div className='basis-1/3 md:flex hidden'>
            <img src={product9Image}  alt="" className='h-full' />

        </div>
    </div>,
    <div className='p-6 md:m-10 m-5 rounded-2xl bg-logo flex md:justify-between justify-center h-[300px] '>
    <div className='p-3 basis-2/3 flex flex-col items-center' >

       <div>
       <h1 className='md:text-6xl text-xl font-bold'> From Lines of Code  <br/> <span className='text-polygreen'>to Lines of Style </span></h1>

        <p className='py-3'> Unleash Your Swag!</p>

       </div>
          
        <div className='text-center py-2'>
        <button className='flex   gap-2 py-3 text-aliceblue px-5 rounded-full bg-flame hover:transition-all hover:bg-flame/50'>Discover<AiOutlineArrowRight className='h-6 '/></button>
        </div>


    </div>
    <div className='basis-1/3 md:flex hidden'>
        <img src={product7Image}  alt="" className='h-full' />

    </div>
</div>,
    <div className='p-6 md:m-10 m-5 rounded-2xl bg-lapis flex md:justify-between justify-center h-[300px] '>
    <div className='p-3 basis-2/3 flex flex-col items-center' >

       <div>
       <h1 className='md:text-6xl text-xl font-bold'>Code Crafted <br/> <span className='text-polygreen'> Swag Perfected </span></h1>

        <p className='py-3'>Wear Your Passion</p>

       </div>
          
        <div className='text-center py-2'>
        <button className='flex   gap-2 py-3  text-aliceblue px-5 rounded-full bg-flame hover:transition-all hover:bg-flame/50'>Discover<AiOutlineArrowRight className='h-6 '/></button>
        </div>


    </div>
    <div className='basis-1/3 md:flex hidden'>
        <img src={product6Image}  alt="" className='h-full' />

    </div>
</div>
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselContent.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex px-6 w-full">
      
        <button onClick={handlePrevious}>
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <div className="w-full">
          {carouselContent[currentIndex]}
        </div>
        <button onClick={handleNext}>
          <FaChevronRight className="w-6 h-6" />
        </button>
      </div>
  
  );
};

export default Banner;
