import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {fadeInUp, footerTruckAnim, staggerFooterContainer, staggerTextContainer} from '../variants';
import {CgArrowLongRight} from 'react-icons/cg';

const Footer = ({footerData}) => {
  return (
      <footer className = "bg-darkblue lg:bg-transparent lg:bg-footer lg:bg-no-repeat lg:bg-left-bottom relative lg:min-h-[738px] pt-12 lg:pt-0">
        <motion.div variants = {staggerTextContainer} initial = "initial" whileInView = {"animate"} viewport = {{once: false, amount: 0.3}}
                    className = "container mx-auto lg:min-h-[738px] flex flex-col justify-between">
          <motion.div
              variants = {footerTruckAnim} className = "hidden lg:flex absolute -top-32 -left-[6%]">
            <Image src = {footerData.truckImg} width = {600} height = {250} alt = "q"/>
          </motion.div>
          <motion.div variants = {fadeInUp} className = "flex flex-col lg:flex-row items-center lg:pr-[95px] lg:gap-x-[95px] gap-y-10 lg:gap-y-0">
            <div className = "flex-1 text-white border-l-8 rounded-lg border-accent py-4 lg:mt-24">
              <p className = "max-w-[330px] text-[20px] leading-[30px] ml-[40px]">{footerData.text}</p>
            </div>
            <form className = "w-full max-w-[550px] bg-black flex-1 rounded-2xl lg:order-2 flex flex-col px-[35px] lg:px-[75px] py-[25px] lg:py-[52px] space-y-[40px] drop-shadow-primary">
              <div className = "flex flex-col">
                <label className = "font-light mb-[10px] text-white" htmlFor = "name">{footerData.form.labelName}</label>
                <input className = "input" type = "text" id = "name" placeholder = {footerData.form.placeholderName}/>
              </div>
              <div className = "flex flex-col">
                <label className = "font-light mb-[10px] text-white" htmlFor = "email">{footerData.form.labelEmail}</label>
                <input className = "input" type = "email" id = "email" placeholder = {footerData.form.placeholderEmail}/>
              </div>
              <motion.button whileHover = {{scale:1.1}} className = "btn self-start hover:bg-accent-hover transition">{footerData.form.btnText}<CgArrowLongRight className = "text-[30px]"/></motion.button>
            </form>
          </motion.div>
          <motion.div variants = {fadeInUp} className = "py-20 flex flex-col lg:flex-row justify-between lg:pr-[19%]">
            <div className = "mb-6 mx-auto lg:mb-0 lg:mx-0">
              <Link href = {'/'}>
                <a>
                  <Image src = {footerData.logo} width = {170} height = {41} alt = "q"/>
                </a>
              </Link>
            </div>
            <ul className = "flex flex-col items-center lg:flex-row gap-y-4 lg:gap-y-0 gap-x-28 text-center">
              {footerData.links.map((item, id) => {
                return (
                    <li key = {id} className = "text-white font-light hover:text-accent transition">
                      <Link href = {item.href}>{item.name}</Link>
                    </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      </footer>
  );
};

export default Footer;