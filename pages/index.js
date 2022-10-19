import Hero from '../components/Hero';
import About from '../components/About';
import How from '../components/How';
import Faq from '../components/Faq';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

import {headerData, heroData, faqData, navData, howData, aboutData, footerData, testimonialData} from '../data.json'

const Home = ({headerData, heroData, faqData, navData, howData, aboutData, footerData, testimonialData}) => {
  return (
    <div className = "overflow-hidden mx-auto bg-violet-600">
      <Hero heroData = {heroData} headerData = {headerData} navData = {navData}/>
      <About aboutData = {aboutData}/>
      <How howData = {howData}/>
      <Faq faqData = {faqData}/>
      <Testimonials testemonialData = {testimonialData}/>
      <Footer footerData = {footerData}/>
      <Copyright />
        <div className="min-h-[2000px]"></div>
    </div>
  );
};

export const getStaticProps = async () => {
    return {
        props: {
            headerData,
            heroData,
            navData,
            faqData,
            aboutData,
            howData,
            testimonialData,
            footerData,
        },
    };
};

export default Home;
