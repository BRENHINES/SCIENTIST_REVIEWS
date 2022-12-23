import React from 'react';

const Hero = () => {
  return (
    <div className='text-white bg-[#A9A9A9]'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#800000]'>
          Lorem, ipsum amet?
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Lorem ipsum dolor  Deserunt, atque?
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse delectus eligendi ipsam vel blanditiis voluptatem?</p>
        <div className="flex justify-center items-center my-6">
                            <div className="flex space-x-1">
                                <input
                                    type="text"
                                    className="block w-full px-4 py-2 text-[#800000] bg-white border rounded-full focus:border-[#800000] focus:ring-[#800000] focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder="Search..."
                                />
                                <button className="px-4 text-white bg-[#800000] rounded-full ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        </div>
    </div>
  );
};

export default Hero;