import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({clients}) => {
  return (
      <Swiper slidesPerView = {3} spaceBetween = {20} slidesOffsetBefore = {20} grabCursor = {true} modules = {[]} className = "testimonialSlider">
        {clients.map((client, id) => {
          return (
              <SwiperSlide key = {id}>
                <div className = "flex flex-col justify-between bg-white/5 h-[360px] rounded-xl px-[50px] pt-[60px] pb-[40px]">
                  <p className = "text-black font-light leading-[30px]">{client.message}</p>
                  <div className = "flex items-center gap-x-5">
                    <Image src = {client.image} width = {60} height = {60} alt = "q"/>
                    <span className = "font-semibold text-black">{client.name}</span>
                  </div>
                </div>
              </SwiperSlide>
          );
        })}
      </Swiper>
  );
};

export default Slider;
