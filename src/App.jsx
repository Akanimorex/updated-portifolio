import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaMinus } from "react-icons/fa"
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaClipboard } from 'react-icons/fa'
import { BsArrowUpRight } from 'react-icons/bs'
import { MdNightlight } from 'react-icons/md'
import { CiLight } from 'react-icons/ci'
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

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  }

  return (
    <div className={isLightMode ? "App_light" : "App"}>

      <nav className={isLightMode ? "bg-blend-darken  dark:bg-gray-900 w-5/5 flex justify-center Nav_light " : "bg-blend-darken  dark:bg-gray-900 w-5/5 flex justify-center Nav"}>
        <div className="w-5/5 flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className={
              isLightMode ? "font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-400 align-bottom  0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 Nav-header_light"
                :
                "font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-400 align-bottom  0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 Nav-header"}
            >
              <li>
                <a href="#" className={isLightMode ? "block py-2 pl-3 pr-4   rounded  md:p-0 text-black" : "block py-2 pl-3 pr-4   rounded  md:p-0 text-gray-200"} aria-current="page">Folio 2023</a>
              </li>
              <li>
                <FaMinus className={isLightMode ? "block py-2 pl-3 pr-4  mt-1  md:p-0 text-black" : "block py-2 pl-3 pr-4  mt-1  md:p-0 text-gray-200"}></FaMinus>
              </li>
              <li>
                <a href="#" className={isLightMode ? "block py-2 pl-3 pr-4   rounded  md:p-0 text-black" : "block py-2 pl-3 pr-4   rounded  md:p-0 text-gray-200"}>Lagos, Nigeria</a>
              </li>
              <li>
                <FaMinus className={isLightMode ? "block py-2 pl-3 pr-4  mt-1  md:p-0 text-black" : "block py-2 pl-3 pr-4  mt-1  md:p-0 text-gray-200"}></FaMinus>
              </li>
              <li>
                <a href="#" className={isLightMode ? "block py-2 pl-3 pr-4   rounded  md:p-0 text-black" : "block py-2 pl-3 pr-4   rounded  md:p-0 text-gray-200"}>{currentTime.toLocaleTimeString()}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='relative'>
        <button
          className="absolute right-2 top-2  flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={toggleLightMode}>
          {isLightMode ? <CiLight /> : <MdNightlight />}
        </button>
      </div>

      <div className='p_container'>
        <div className='w-5/5 flex justify-between h-screen'>
          <div className='text-left left-side p-5 flex flex-col relative'>
            <div className='top h-screen'>
              <h1 className={isLightMode ? "text-black py-9" : "text-white py-9"} >Akanimo Rex</h1>
              <p className=''>
                <span>
                  Hello ! I'm a skilled frontend engineer with 3+ years of experience in ReactJs, Typescript, Tailwindcss, Material UI, HTML/CSS.
                  I specialize in crafting seamless user experiences with pixel-perfect designs and clean code. When I'm not coding, you'll find me indulging in my hobbies of gaming, reading, and music.

                </span>
                <br></br>
                <br></br>
                <span>
                  Explore my portfolio to see my work, and let's connect for potential collaborations. Let's create outstanding web experiences together!
                </span>
              </p>
            </div>
            <div className='bottom'>
              <ul className={isLightMode ? "text-black font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 align-bottom  0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 Nav-header_light" : "text-gray-200 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 align-bottom  0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 Nav-header"} >
                <li> <a target="_blank" href='https://docs.google.com/document/d/1fA5ZT-dPzVjzxzHPLYLPeMaPnZekxFkc/edit?usp=sharing&ouid=117237400129134902289&rtpof=true&sd=true' className='flex flex-row align-baseline items-baseline gap-x-2'><FaClipboard /> Resume <BsArrowUpRight /></a> </li>
                <li> <a target="_blank" href="https://github.com/Akanimorex" className='flex flex-row align-baseline items-baseline gap-x-2'><FaGithub /> Github <BsArrowUpRight /></a></li>
                <li><a target="_blank" href="https://twitter.com/_kanimoh" className='flex flex-row align-baseline items-baseline gap-x-2'><FaTwitter /> Twitter <BsArrowUpRight /></a></li>
              </ul>
              <p>Inspired by <a  className={isLightMode?"text-black":'text-white'} href='https://www.sarahdayan.dev'>Sarah Dayan</a></p>
            </div>
          </div>
          <div className='right-side text-left relative overflow-y-scroll scrollbar'>
            <h3 className={isLightMode ? 'text-black py-5' : 'text-gray-200 py-5'}>WORKS</h3>
            <Works isLightMode={isLightMode} name={"Skaterbirds"} description={"NFT product website"}  />
            <Works isLightMode={isLightMode} name={"Polkabridge"} description={" Decentralized All-in-one Financial Application Platform "} />
            <Works isLightMode={isLightMode} name={'Bookdown'} description={"Food Application"}/>
            <Works isLightMode={isLightMode} name={'The Roothub'} description={"Innovation and Incubation Hub"} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
