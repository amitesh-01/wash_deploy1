import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper/core';
import laundry from '../img/laundry-shop.jpeg';
import shop1 from '../img/shop1.jpg';
import shop2 from '../img/shop2.jpg';
import shop3 from '../img/shop3.webp';
import { EffectCube,EffectFade,EffectFlip,EffectCards,EffectCreative,EffectCoverflow } from 'swiper';

SwiperCore.use([Autoplay,EffectCube,EffectFade,EffectFlip,EffectCards,EffectCreative,EffectCoverflow]);

const MySwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          effect='fade'
    >
          <SwiperSlide><img src={laundry} style={{ height: '60vh',width:"inherit"}} /></SwiperSlide>
      <SwiperSlide><img src={shop1} style={{ height: '60vh',width:"inherit"}} /></SwiperSlide>
      <SwiperSlide><img src={shop2} style={{ height: '60vh',width:"inherit"}} /></SwiperSlide>
      <SwiperSlide><img src={shop3} style={{ height: '60vh',width:"inherit"}} /></SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;