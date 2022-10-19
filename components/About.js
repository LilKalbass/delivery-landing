import Image from 'next/image';
import {motion} from 'framer-motion';
import {fadeInUp,fadeInDown,staggerTextContainer} from '../variants';

const About = ({aboutData}) => {
  return (
      <section>
        <div className = "container mx-auto">
          <motion.div variants = {staggerTextContainer} initial = "initial" whileInView = {"animate"} viewport = {{once: false, amount: 0.3}}
                      className = "flex flex-col lg:flex-row gap-x-5 ">
            <motion.div variants = {fadeInDown} className = "flex-1 mt-[10%]">
              <h3 className = "pl-4 h3">{aboutData.title}</h3>
              <p className = "ml-3 lead max-w-[450px] mb-16">{aboutData.subtitle}</p>
              <div className = "bg-red-100 border-l-8 rounded-lg border-accent max-w-[550px] h-[150px] flex items-center justify-center mb-8 lg:mb-0 ">
                <p className = "text-lg leading-8 font-medium max-w-[320px] lg:max-w-[440px]">{aboutData.text}</p>
              </div>
            </motion.div>
            <motion.div variants = {fadeInUp} className = "flex-1">
              <Image src={aboutData.boyImg} width={580} height={600}/>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default About;
