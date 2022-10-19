import Image from 'next/image';
import {motion} from 'framer-motion';
import {fadeInLeft, fadeInRight, staggerTextContainer} from '../variants';

const How = ({howData}) => {
  return (
      <section className = "mb-20">
        <div className = "container mx-auto">
          <motion.div variants = {staggerTextContainer} initial = "initial" whileInView = {"animate"} viewport = {{once: false, amount: 0.3}}
                      className = "flex flex-col lg:flex-row gap-x-10 items-center">
            <motion.div variants = {fadeInRight} className = "flex-1">
              <Image src = {howData.girlImg} width = {720} height = {678} />
            </motion.div>
            <motion.div variants={fadeInLeft} className = "flex flex-1 justify-end">
              <div className = "max-w-[450px]">
                <h3 className = "h3">{howData.title}</h3>
                <p className = "lead">{howData.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default How;