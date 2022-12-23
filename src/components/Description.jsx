import React from 'react';

const description = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <p className='text-[#800000] font-bold text-4xl'>ABOUT US.</p>
          <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>Manage your scientist reviews.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
        </div>
        <img src="../assets/8.jpg" alt="" />
      </div>
    </div>
  );
};

export default description;