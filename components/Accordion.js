import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {fadeInRight} from '../variants';

import {HiOutlinePlus, HiOutlineMinus} from 'react-icons/hi';

const Accordion = ({accordion}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <motion.div variants = {fadeInRight} className = "max-w-[550px]">
        <div className = "drop-shadow-primary bg-white/10 text-black cursor-pointer rounded-xl h-[90px] px-12 flex items-center"
             onClick={() => {setIsOpen(!isOpen)}}>
          <div className = "w-full flex justify-between items-center">
            <p className = "lead font-medium leading-snug max-w-[400px]">{accordion.question}</p>
            <div className = "transition-all duration-500">
                {isOpen
                    ? (<motion.div initial = "initial" animate = {{rotate: 180}}><HiOutlineMinus className = "text-2xl "/></motion.div>)
                    : (<motion.div><HiOutlinePlus initial = "initial" animate = {{rotate: 0}} className = "text-2xl text-accent"/></motion.div>)}
            </div>
          </div>
        </div>
        <div className = {`${isOpen ? 'max-h-[160px] p-8 bg-white/10 rounded-xl drop-shadow-primary my-2' : 'max-h-0'}
        h-[160px] overflow-hidden transition-all flex items-center`}>
          <p className = "lead leading-[30px] text-black">{accordion.answer}</p>
        </div>
      </motion.div>
  );
};

export default Accordion;