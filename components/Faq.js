import Image from 'next/image';
import Accordion from './Accordion';
import {motion} from 'framer-motion';
import {fadeInLeft, fadeInRight, staggerTextContainer, staggerAccordionContainer} from '../variants';

const Faq = ({faqData}) => {
  return (
      <section className = "min-h-[1150px] lg:bg-faq bg-no-repeat bg-right-top rounded-bl-[100%] rounded-tr-[10%] bg-no-repeat lg:pt-40 lg:pb-24 mb-16 lg:mb-40">
        <div className = "container mx-auto">
          <motion.div variants={staggerTextContainer} initial = "initial" whileInView = {"animate"} viewport = {{once: false, amount: 0.3}}
                      className = "relative flex flex-col lg:flex-row justify-center lg:justify-start items-center pt-8 pb-16 lg:pb-24">
            <motion.div variants = {fadeInRight} className = "lg:max-w-[45%]">
              <h3 className = "h3 uppercase font-bold tracking-wide">{faqData.pretitle}</h3>
              <h2 className = "h2 mb-6 lg:mb-12 text-black">{faqData.title}</h2>
            </motion.div>
            <motion.div variants = {fadeInLeft} className = "lg:absolute lg:right-4 lg:-top-36 ">
              <Image src = {faqData.boyImg} width = {700} height = {500}/>
            </motion.div>
          </motion.div>
          <motion.div variants = {staggerAccordionContainer} initial = "initial" whileInView = {"animate"} viewport = {{once: false, amount: 0.3}}
                      className = "grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-4">
            {faqData.accordions.map((accordion, id) => {
              return (
                  <Accordion accordion = {accordion} key = {id}/>
              );
            })}
          </motion.div>
        </div>
      </section>
  );
};

export default Faq;
