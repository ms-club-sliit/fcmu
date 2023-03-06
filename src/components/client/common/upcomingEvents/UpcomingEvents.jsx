import React from 'react'
import './upcomingEvents.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import heroSecImage from "../../../../assets/images/heroSecImg.svg"
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function UpcomingEvents() {
  return (
    <div className="container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        <SwiperSlide>
          <div className="b-full">
            <div className="row">
              <div className="col-6 ">
                  {/* <img className="heroImgSec" src={heroSecImage} alt="heroSecImage" /> */}
                  <div>
                    <div class="container b-full">
                      
                    </div>
                </div>
                </div>
              <div className="col-md-6 ">
                
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  )
}

export default UpcomingEvents
