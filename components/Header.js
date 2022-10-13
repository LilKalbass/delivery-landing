import React,{useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Nav from './Nav';
import NavMobile from './NavMobile';
import {motion} from 'framer-motion';

import {HiMenu} from "react-icons/hi";

const Header = ({ headerData, navData }) => {
  const [header,setHeader] = useState(false);
  const [navMobile,setNavMobile] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
     window.scrollY > 80 ? setHeader(true) : setHeader(false);
    })
  })

  return (
      <header className = {`${header ? "py-2 px-10 lg:px-12 bg-black drop-shadow-primary" : "py-4 px-8 bg-accent"} 
      flex justify-between items-center w-full max-w-[90vw] lg:max-w-[1200px] left-0 right-0 mx-auto rounded-b-full duration-500 fixed transition-all z-20`}>
          <Link href = {'/'}>
              <a>
                  <Image src = {`${header ? headerData.logoImgV2 : headerData.logoImgV1}`} width = {header ? 180 : 200} height = {50}/>
              </a>
          </Link>
          <div className = "hidden lg:flex gap-x-24">
              <Nav navData = {navData} header = {header}/>
              <motion.button whileHover = {{scale:1.05}} className = {`${header ? "hover:bg-accent-hover/80" : "bg-black text-accent hover:text-accent-hover/80 hover:bg-black"} 
              btn p-2.5 h-full`}>
                  {headerData.btnText}
              </motion.button>
          </div>
          <div onClick={() => setNavMobile(!navMobile)} className = "lg:hidden cursor-pointer">
              <HiMenu className = {`${header ? "text-accent hover:text-accent-hover" : "text-black hover:text-black/75"} text-4xl`}/>
          </div>
          <div className = {`${navMobile ? "max-h-fit" : "max-h-0"} 
          lg:hidden absolute w-full top-full left-0 rounded-tr-[650px] rounded-bl-[450px] overflow-hidden shadow-2xl transition-all`}>
              <NavMobile navData = {navData}/>
          </div>
      </header>
  );
};

export default Header;
