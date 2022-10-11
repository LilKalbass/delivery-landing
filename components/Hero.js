import Image from 'next/image';
import Header from './Header';

const Hero = ({heroData, headerData, navData}) => {
  return (
      <section className = "bg-hero bg-no-repeat bg-left-top min-h-[800px] lg:min-h-[950px] lg:mb-80">
          <div className = "container mx-auto">
              <div>
                  <Header headerData = {headerData} navData = {navData}/>
              </div>
              <h1 className = "h1 max-w-[750px] text-black pt-36 mb-16">{heroData.title}</h1>
              <button className = "btn mb-4">{heroData.btnText}</button>
              <div className = "hidden lg:flex">
                  <Image src = {heroData.girlImg} width={200} height={500}/>
              </div>
              <div  className = "hidden lg:flex absolute -bottom-[25%] -left-[30%]">
                  <Image src = {heroData.truckImg} width={800} height={400}/>
              </div>
              <div className = "hidden lg:flex absolute left-[180px] bottom-0 z-10">
                  <Image src = {heroData.boyImg} width={200} height={500}/>
              </div>
          </div>
      </section>
  )
};

export default Hero;
