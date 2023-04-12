import React from 'react';
import '../App.css'
import { FaLink } from 'react-icons/fa'



const Works = () => {
    return (
        <div className='  flex-col  p-3 h-fit  Work_box my-4 transform transition duration-500 hover:scale-105 ml-2 md:group-hover:opacity-50'>
            <p className='py-3'>NEXTJS + TYPESCRIPT + GSAP</p>
            <h3 style={{ fontSize: '2rem' }} className='text-gray-100'>Guild Protocol</h3>
            <p className='py-3'>Landing Page for a play to earn crypto DAO</p>
            <span className='flex'><a href='' className='View_link text-gray-200 flex items-center py-2'>View <FaLink /></a></span>
        </div>
    )
}

export default Works;
