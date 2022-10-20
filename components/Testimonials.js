import Slider from '../components/Slider';
import {motion} from 'framer-motion';
import {fadeInUp, staggerTextContainer} from '../variants';

const Testimonials = ({testemonialData}) => {
  return (
      <section className = "relative min-h-[600px]">
        <div className = "container mx-auto">
          <motion.div variants = {staggerTextContainer} initial = "initial" whileInView = {"animate"} viewport = {{once: false, amount: 0.3}}
                      className = "flex flex-col lg:flex-row">
            <motion.div variants = {fadeInUp} className = "lg:w-[30%]">
                <h3 className = "h3 tracking-wide">{testemonialData.pretitle}</h3>
                <h2 className = "h2 mb-6 text-black ">{testemonialData.title}</h2>
            </motion.div>
          <motion.div variants = {fadeInUp} className = "lg:w-[60%] lg:absolute right-0 pt-10">
            <Slider clients = {testemonialData.clients}/>
          </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default Testimonials;
