import React from 'react';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#800000]'>LOGO</h1>
        <p className='py-4'>We are there to help you for manage your scientist reviews and consult any others scientist reviews writting by others scientists</p>
        
      </div>
      <div className='lg:col-span-2 flex justify-between items-center mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>Reviews</h6>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Authors</h6>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Domains</h6>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;