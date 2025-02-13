import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaMinus } from "react-icons/fa"
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
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
          <div className=" w-full md:block md:w-auto" id="navbar-default">
            <ul className={
              isLightMode ? " flex flex-row p-1  md:p-0 mt-1 align-bottom text-[12px] md:text-[0.875rem]  0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 Nav-header_light"
                :
                " flex flex-row p-1 md:p-0 mt-1  align-bottom  text-[12px] md:text-[ 0.875rem] space-x-2 0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 Nav-header"}
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

      <div className='p_container lg:pl-[10rem] md:pl-[5rem] pl-[20px] pr-[20px] md:pr-[5rem] lg:pr-[10rem] pt-[4rem] pb-[4rem]'>
        <div className='w-5/5  sm:flex justify-between h-auto'>
          <div className='text-left lg:h-screen md:[70vh] sm:h-[50vh] left-side sm:w-[50%] p-5 flex flex-col relative'>
            <div className='top  lg:h-screen md:[70vh] sm:h-[50vh] '>
              <h1 className={isLightMode ? "text-black py-9" : "text-white py-9"} >Akanimo Rex</h1>
              <p className=''>
                <span>
                Hello!, I’m a blockchain developer with a strong focus on writing efficient Solidity smart contracts and building robust Web3 frontends. I’ve worked on decentralized applications (dApps) across Ethereum and other EVM-compatible chains, ensuring secure and scalable solutions.
                  <br></br>
                  To demystify blockchain concepts, I’ve created a YouTube video series where I break down complex blockchain topics into digestible content for developers and enthusiasts alike. 
                  I also write about programming concepts, blockchain innovations, and technical documentation on <a href='https://akanimorex.hashnode.dev/' target='_blank'> HashNode </a> , sharing my insights and discoveries with the developer community.

                </span>
                <br></br>
                <br></br>
                <span>
                  Explore my portfolio to see my work, and let's connect for potential collaborations. Let's create outstanding web experiences together!
                </span>
              </p>
            </div>

            <ul
              className={`${
                isLightMode
                  ? "text-black text-sm flex flex-wrap p-2 gap-2 md:gap-4 items-center justify-center dark:bg-gray-800 dark:border-gray-700 Nav-header_light"
                  : "text-gray-200 text-sm font-medium flex flex-wrap p-2 gap-2 md:gap-4 items-center justify-center dark:bg-gray-800 dark:border-gray-700 Nav-header"
              }`}
            >
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/akanimo-akpan/"
                  className="flex flex-row items-center gap-x-1 p-2"
                >
                  <FaLinkedin /> Linkedin <BsArrowUpRight className="hidden md:block" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/Akanimorex"
                  className="flex flex-row items-center gap-x-1 p-2"
                >
                  <FaGithub /> Github <BsArrowUpRight className="hidden md:block" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/_kanimoh"
                  className="flex flex-row items-center gap-x-1 p-2"
                >
                  <FaTwitter /> Twitter <BsArrowUpRight className="hidden md:block" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@akanimoakpan9083/featured"
                  className="flex flex-row items-center gap-x-1 p-2"
                >
                  <FaYoutube /> Youtube <BsArrowUpRight className="hidden md:block" />
                </a>
              </li>
            </ul>

          </div>
          <div className='right-side h-screen   w-full sm:w-[50%] text-left relative overflow-y-scroll scrollbar'>
            <h3 className={isLightMode ? 'text-black py-5' : 'text-gray-200 py-5'}>WORKS</h3>
            <Works isLightMode={isLightMode} name={"Skaterbirds"} description={"NFT product website"} skills={"ReactJs + Typescript + Tailwind"} link={"https://www.skaterbirds.io/"}/>
            <Works isLightMode={isLightMode} name={"Polkabridge"} description={" Decentralized All-in-one Financial Application Platform "} skills={"ReactJs + Typescript + NodeJs + material ui"} link={"https://p2p.polkabridge.org/"} />
            <Works isLightMode={isLightMode} name={'Bookdown'} description={"Food Application"} skills={"HTML + CSS/SCSS + Javascript"}/>
            <Works isLightMode={isLightMode} name={'ClaassicChat'} description={"Chat Application"} skills={"CSS/SCSS + ChakraUI + ReactJs + NextJs + Typescript"} link={"https://classic-web.netlify.app/"} />
            <Works isLightMode={isLightMode} name={'The Roothub'} description={"Innovation and Incubation Hub"} skills={"HTML + CSS/SCSS + Javascript + ReactJs"} link={"https://theroothub.com/"} />
          </div>
        </div>
        <div className='p-4'>
        
              <p className='text-center md:text-left' >Inspired by <a  className={isLightMode?"text-black":'text-white'} href='https://www.sarahdayan.dev'>Sarah Dayan</a></p>
          </div>
      </div>

    </div>
  )
}

export default App
