import Image from 'next/image';
import Header from './Header';
import {motion} from 'framer-motion';
import {staggerContainer, boyAnim, girlAnim, heroTruckAnim, fadeInDown} from '../variants';

import {CgArrowLongRight} from "react-icons/cg";

const Hero = ({heroData, headerData, navData}) => {
  return (
      <section className = "bg-hero bg-no-repeat bg-left-top min-h-[800px] lg:min-h-[950px] lg:mb-80">
          <motion.div variants = {staggerContainer} initial = "initial" animate = "animate"
                      className = "container mx-auto min-h-[800px] lg:min-h-[1000px] relative">
              <motion.div variants = {fadeInDown} className = "pb-10 lg:pb-20">
                  <Header headerData = {headerData} navData = {navData}/>
              </motion.div>
              <motion.h1 variants = {fadeInDown} className = "h1 max-w-[750px] text-black pt-24 mb-6">{heroData.title}</motion.h1>
              <motion.button whileHover = {{scale:1.1}} variants = {fadeInDown} className = "btn ml-2">
                  {heroData.btnText}<CgArrowLongRight className = "text-2xl"/>
              </motion.button>
              <motion.div variants = {girlAnim} className = "hidden lg:flex">
                  <Image src = {heroData.girlImg} width={250} height={490}/>
              </motion.div>
              <motion.div variants = {heroTruckAnim} className = "hidden lg:flex -bottom-[12%] -left-[35%] absolute ">
                  <Image src = {heroData.truckImg} width={850} height={580}/>
              </motion.div>
              <motion.div variants = {boyAnim} className = "hidden lg:flex left-[280px] bottom-2 absolute z-10">
                  <Image src = {heroData.boyImg} width={820} height={500}/>
              </motion.div>
          </motion.div>
      </section>
  )
};

export default Hero;
