import React from 'react'

import review1 from '../assets/1.jpg';
import review2 from '../assets/2.jpg';
import review3 from '../assets/3.jpg';
import review4 from '../assets/4.jpg';
import review5 from '../assets/5.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4'>
        <h1 className='text-[#800000] font-bold text-4xl'>CATALOG OF SCIENTIFIC JOURNALS</h1>
        <p className='py-4'>Here we gather the most popular reviews.</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={review1} alt="/" />
            <img className='w-full h-full object-cover' src={review2} alt="/" />
            <img className='w-full h-full object-cover' src={review3} alt="/" />
            <img className='w-full h-full object-cover' src={review4} alt="/" />
            <img className='w-full h-full object-cover' src={review5} alt="/" />
        </div>
    </div>
  )
} 

export default Destinations