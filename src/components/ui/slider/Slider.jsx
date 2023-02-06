import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper'

import './Slider.scss'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Slider.module.scss'
import card2 from './card2.png'

const Slider = ({img}) => {
   return (
      <Swiper
         modules={[Navigation, Autoplay, Pagination]}
         spaceBetween={0}
         slidesPerView={1}
         onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper) => console.log(swiper)}
         className={styles.wrapper}
         autoplay={{
            delay: 10000,
            pauseOnMouseEnter: true,
         }}
         pagination={{ clickable: true }}
         navigation>
         <SwiperSlide className={styles.slide}>
            <img src={img} />
         </SwiperSlide>
         <SwiperSlide className={styles.slide}>
            <img src={img} />
         </SwiperSlide>
         <SwiperSlide className={styles.slide}>
            <img src={img} />
         </SwiperSlide>
      </Swiper>
   );
}

export default Slider