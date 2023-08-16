import React from 'react'
import { Swiper,  SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { FreeMode } from 'swiper';
import 'swiper/css' ;
import 'swiper/css/free-mode'
import c1 from '../images/cat-1.png'
import c2 from '../images/cat-2.png'
import c3 from '../images/cat-3.png'
import c4 from '../images/cat-4.png'
import c5 from '../images/cat-5.png'
import c6 from '../images/cat-6.png'
import t1 from '../images/trend1.png'; 
import t2 from '../images/trend2.png';
import t3 from '../images/trend3.png'; 
import t4 from '../images/trend4.png';  
import t5 from '../images/trend5.png'; 
import t6 from '../images/trend6.png'; 
import t7 from '../images/trend7.png'; 
import t8 from '../images/trend8.png'; 
import t9 from '../images/trend9.png'; 
import t10 from '../images/trend10.png';
import t11 from '../images/trend11.png';
import t12 from '../images/trend12.png';
import t13 from '../images/trend13.png';
import t14 from '../images/trend14.png';
import t15 from '../images/trend15.png';
import t16 from '../images/trend16.png';
import t17 from '../images/trend17.png';
import t18 from '../images/trend18.png';

export default function Latest() {
  return (
        <section className = "latest">
            <div className='container'>
                <div className='categories'>
                    <h5>Categories you might like</h5>
                        <div className='cat-wrapper'>
                            <div className='card'>
                                <img alt='' src={c1}></img>
                                <p className='title'>Kids</p>
                            </div>
                            <div className='card'>
                                <img alt='' src={c2}></img>
                                <p className='title'>Kids</p>
                            </div>
                            <div className='card'>
                                <img alt='' src={c3}></img>
                                <p className='title'>Womens shirts</p>
                            </div>
                            <div className='card'>
                                <img alt='' src={c4}></img>
                                <p className='title'>mens shirts</p>
                            </div>
                            <div className='card'>
                                <img alt='' src={c5}></img>
                                <p className='title'>home kitchen ware</p>
                            </div> 
                            <div className='card'>
                                <img alt = '' src={c6}></img>
                                <p className='title'>women dress</p>
                            </div>   
                            

                        </div>
                    </div>
                <div className='trending'>
                        <h5>Trending now</h5>
                        <ul>
                            <li>Women</li>
                            <li>Men</li>
                            <li>kids</li>
                            <li>home</li>
                            <li>sale</li>
                        </ul>
                    <Swiper
                        loop = {true} freeMode = {true} grabCursor = {true} 
                        className='swiper'
                        
                        slidesPerView={6}
                        breakpoints={{
                                        0: {
                                        slidesPerView: 1,
                                        },
                                        400:{
                                        slidesPerView:2,
                                        },
                                        639: {
                                        slidesPerView: 3,
                                        },
                                        865:{
                                        slidesPerView:4
                                        },
                                        1000:{
                                        slidesPerView:5
                                        },
                                        1500:{
                                        slidesPerView:6
                                        },
                                        1700:{
                                        slidesPerView:7
                                        }
                                    }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                        }}
                        modules={[FreeMode, EffectCoverflow, Pagination, Navigation]}
                        >
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t1}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t2}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t3}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t4}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t5}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t6}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t7}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t8}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t9}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t10}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t11}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t12}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t13}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t14}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t15}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t16}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t17}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>
                            <SwiperSlide className='swiper-slide swiper-card'><img alt='' src={t18}></img> <p>Lenin-Blind Shirt</p> <p>EGP 499.00</p> </SwiperSlide>                                       
                            <div className='control'>
                                <div className="swiper-pagination"></div>
                            </div>                        
                        </Swiper> 
                </div>
            </div>
        </section>
  )
}
