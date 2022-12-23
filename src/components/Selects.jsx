import React from 'react'

import review1 from '../assets/1.jpg';
import review2 from '../assets/2.jpg';
import review3 from '../assets/3.jpg';
import review4 from '../assets/4.jpg';
import review5 from '../assets/5.jpg';
import review6 from '../assets/6.jpg';
import SelectsCard from './SelectsCards';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={review1} text='NEAR HORIZON' />
    <SelectsCard bg={review2} text='CLASSEMENT DES REVUES SCIENTIFIQUES EN SCIENCES DE GESTION' />
    <SelectsCard bg={review3} text='LE SUPER POUVOIRS DU CERVEAU' />
    <SelectsCard bg={review4} text='BIBLIOTHEQUE' />
    <SelectsCard bg={review5} text='CELL BIOLOGY' />
    <SelectsCard bg={review6} text='ROBOTS LA REVOLUTION INVISIBLE' />
    
        
    </div>
  )
}

export default Selects