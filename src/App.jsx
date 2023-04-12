import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaMinus } from "react-icons/fa"
import { FaLink } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaClipboard } from 'react-icons/fa'
import Works from './components/Works'

import './App.css'

function App() {

  const [isLightMode, setIsLightMode] = useState(false);

 
  const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000); // Update time every 1000ms (1 second)
  
      return () => {
        clearInterval(timer); // Cleanup on unmount
      };
    }, []);

  const toggleLightMode =()=>{
    setIsLightMode(!isLightMode);
  }

  return (
    <div className={isLightMode?"App_light":"App"}>

      <nav className className="bg-blend-darken  dark:bg-gray-900 w-5/5 flex justify-center Nav">
        <div className="w-5/5 flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-400 align-bottom  0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 Nav-header">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4   rounded  md:p-0 text-gray-200" aria-current="page">Folio 2023</a>
              </li>
              <li>
                <FaMinus className=' block py-2 pl-3 pr-4  mt-1  md:p-0 text-gray-200'></FaMinus>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4   rounded  md:p-0 text-gray-200">Lagos, Nigeria</a>
              </li>
              <li>
                <FaMinus className='block py-2 pl-3 pr-4 mt-1   md:p-0 text-gray-200'></FaMinus>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4   rounded  md:p-0 text-gray-200">{currentTime.toLocaleTimeString()}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button onClick={toggleLightMode}>Light mode</button>
      <div className='p_container'>
        <div className='w-5/5 flex justify-between h-screen'>
          <div className='text-left left-side p-5 flex flex-col relative'>
            <div className='top h-screen'>
              <h1 className='text-white py-9'>Akanimo Rex</h1>
              <p className=''>
                <span>
                  I’m a front end dev that specialize in day to day activities in the presidential villa cooking necessary pixels and what not for public consumption.
                  I love spices and seasoning.
                </span>
                <br></br>
                <br></br>
                <span>
                  I’m writing this as a placeholder for those boring Lorem Ipsum text that should be banned.
                  By the way, I’ve probably seen all the movies you’ve seen.
                </span>
              </p>
            </div>
            <div className='bottom'>
              <ul className="text-gray-200 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 align-bottom  0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 Nav-header">
                <li className='flex flex-row align-baseline items-baseline gap-x-2'> <FaClipboard/> Resume <FaLink/> </li>
                <li className='flex flex-row align-baseline items-baseline gap-x-2'><FaGithub/> Github <FaLink/></li>
                <li  className='flex flex-row align-baseline items-baseline gap-x-2'><FaTwitter/> Twitter <FaLink/> </li>
              </ul>
              <p>Inspired by <a href='https://www.sarahdayan.dev'>Sarah Dayan</a></p>
            </div>
          </div>
          <div className='right-side text-left relative overflow-y-scroll scrollbar'>
           <h3 className='text-gray-200 py-5'>WORKS</h3> 

           <Works/>
           <Works/>
           <Works/>
           <Works/>
           <Works/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
