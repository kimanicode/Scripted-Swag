import React from 'react';
import product1Image from '../assets/hoodie.png';
import product2Image from '../assets/docker.png';
import product3Image from '../assets/mug.png';
import product4Image from '../assets/tshirt.png';
import product5Image from '../assets/works.png';
import product6Image from '../assets/backpack.png';
import product7Image from '../assets/tech.png';
import product8Image from '../assets/getme.png';
import {AiOutlineShoppingCart} from "react-icons/ai";


const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col  md:h-[400px]  hover:bg-alabaster items-center space-y-4 m-2">
      <img src={product.imageUrl} alt={product.name} className="w-full h-2/3 rounded-lg bg-lapis" />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <button className="bg-polygreen hover:bg-polygreen/50 text-alabaster rounded-lg py-2 px-4 mt-auto hover:bg-blue-600 transition duration-300 flex gap-2 ">
        Add to Cart  <span className='text-2xl'><AiOutlineShoppingCart/></span>
      </button>
    </div>
  );
};

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center py-4 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

const ShowcaseProducts = () => {
  const products = [
   
    {
      name: 'React Hoodie',
      description: 'Ksh. 1,700',
      imageUrl: product1Image,
    },
    {
      name: 'Docker Hoodie',
      description: 'Ksh. 1,700',
      imageUrl: product2Image,
    },
    {
      name: 'NodeJs Mug',
      description: 'Ksh. 400',
      imageUrl: product3Image,
    },
    {
      name: 'Just Build It Tshirt',
      description: 'Ksh. 1,200',
      imageUrl: product4Image,
    },
    {
      name: 'Sticker',
      description: 'Ksh. 50',
      imageUrl: product5Image,
    },
    {
      name: 'Dev Backpack',
      description: 'Ksh 2500',
      imageUrl: product6Image,
    },
    {
      name: 'TechGuy Tshirt',
      description: 'Ksh 1200',
      imageUrl: product7Image,
    },
    {
      name: 'Get me coffee!',
      description: 'Ksh 400',
      imageUrl: product8Image,
    },
    // Add more product objects as needed
  ];

  return (
    <div className="container P-6 mt-8 ">
      <h2 className="text-2xl text-center text-lapis font-semibold mb-4">Featured Products</h2>
      <ProductList products={products} />
    </div>
  );
};

export default ShowcaseProducts;
