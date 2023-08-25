import React ,{useState} from 'react';
import product1Image from '../assets/hoodie.png';
import product2Image from '../assets/docker.png';
import product3Image from '../assets/mug.png';
import product4Image from '../assets/tshirt.png';
import product5Image from '../assets/works.png';
import product6Image from '../assets/backpack.png';
import product7Image from '../assets/tech.png';
import product8Image from '../assets/getme.png';
import product9Image from '../assets/sweatshirt.png';
import {AiOutlineShoppingCart} from "react-icons/ai";
import { FaChevronDown } from 'react-icons/fa';





const ProductCard = ({ product }) => {
  
    const colorOptions = [
      { value: 'red', label: 'Red' },
      { value: 'blue', label: 'Blue' },
      { value: 'green', label: 'Green' },
      { value: 'black', label: 'Black' },
      // Add more color options here
    ];
  
    const [selectedColor, setSelectedColor] = useState(colorOptions[0].value);
  
    const handleColorSelection = (event) => {
      setSelectedColor(event.target.value);
      console.log('Selected Color:', event.target.value);
      // You can use the selected color for further actions
    }
 
  return (
    
    <div className="bg-aliceblue rounded-lg shadow-md  flex flex-col p-3 md:h-[400px] hover:bg-platinum/75   space-y-4 m-2 md:w-1/4">
      <img src={product.imageUrl} alt={product.name} className="w-full h-2/4 hover:rounded-lg bg-platinum" />
      
      <div className='flex flex-col  w-full '>
        <p className='px-2 text-alabaster w-1/2 text-center rounded bg-logo font-thin'>{product.type}</p>
        <div className='flex justify-between'>
           <h3 className="font-thin text-gray-950">{product.name}</h3>
           <p className='font-bold  '>Ksh. 1700</p>
        
        </div>
        
        <div className='w-full'>
        <p className="font-thin">{product.description}</p>
        </div>

        <div className='bg-logo h-[2px] mt-2'></div>
        <div className='flex justify-between basis-1/3 py-2'>
          <div className='flex  items-center  '>
                    <p className="text-thin font-semibold mb-4">Color:</p>
                      <div className="relative ">
                        <select
                          className="block appearance-none w-full bg-white border border-gray-300 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          value={selectedColor}
                          onChange={handleColorSelection}
                        >
                          {colorOptions.map((color) => (
                            <option key={color.value} value={color.value}>
                              {color.label}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                          <FaChevronDown className=" text-gray-500" />
                        </div>
                      </div>
            

      
          </div>
          <div className='basis-1/2'><button className="bg-orangeweb hover:bg-orangeweb/50 text-alabaster rounded-lg  p-2 hover:bg-blue-600  flex  gap-2 ">
        Add to Cart  <span className='text-2xl'><AiOutlineShoppingCart/></span>
      </button></div>
          
          


        </div>


      </div>
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
      type:'Hoodies',
      description: 'The perfect blend of style and coziness. ',
      imageUrl: product1Image,
    },
    {
      name: 'Docker Hoodie',
      type:'Hoodies',
      description: 'The perfect blend of style and coziness. ',
      imageUrl: product2Image,
    },
    {
      name: 'NodeJs Mug',
      type:'Mugs',
      description: 'The perfect blend of style and coziness.',
      imageUrl: product3Image,
    },
    {
      name: 'Just Build It',
      type:'Tshirt',
      description: 'The perfect blend of style and coziness.',
      imageUrl: product4Image,
    },
    {
      name: 'Sticker',
      type:'Sticker',
      description: 'The perfect blend of style and coziness. ',
      imageUrl: product5Image,
    },
    {
      name: 'Dev Backpack',
      type:'Bag',
      description: 'The perfect blend of style and coziness. ',
      imageUrl: product6Image,
    },
    {
      name: 'TechGuy Tshirt',
      type:'Tshirt',
      description: 'The perfect blend of style and coziness. ',
      imageUrl: product7Image,
    },
    {
      name: 'Get me coffee!',
      type:'Headwear',
      description: 'The perfect blend of style and coziness.',
      imageUrl: product8Image,
    },
    {
      name: 'Sweat Shirt',
      type:'Sweatshirt',
      description: 'The perfect blend of style and coziness.',
      imageUrl: product9Image,
    },
    // Add more product objects as needed
  ];

  return (
    <div className="container P-6 mt-8  bg-mintgreen">
      <h2 className="text-2xl text-center text-flame py-2 font-semibold mb-4">Featured Products</h2>
      <ProductList products={products} />
    </div>
  );
};

export default ShowcaseProducts;
