import React from 'react';
import '../App.css'
import {BsArrowUpRight} from 'react-icons/bs'




const Works = ({isLightMode, name , description }) => {
    return (
        <div className={isLightMode?'flex-col  p-3 h-fit  Work_box_light shadow-lg my-4 transform transition duration-500 hover:scale-105 ml-2 md:group-hover:opacity-50 hover:shadow-2xl':'flex-col  p-3 h-fit  Work_box my-4 transform transition duration-500 hover:scale-105 ml-2 md:group-hover:opacity-50'}>
            <p className='py-3'>NEXTJS + TYPESCRIPT + GSAP</p>
            <h3 style={{ fontSize: '2rem' }} className={isLightMode?'text-black':'text-gray-100'}> { name }</h3>
            <p className='py-3'>{ description }</p>
            <span className='flex'><a href='' className={ isLightMode?"View_link text-black flex items-center py-2":'View_link text-gray-200 flex items-center py-2'}>View<BsArrowUpRight/></a></span>
        </div>
    )
}

export default Works;
