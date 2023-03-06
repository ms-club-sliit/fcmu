import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import './upcomingEvents.css'

function UpcomingEvents() {
  return (
    <div className="container mb-5">
      <div className="text-center text-color pb-5">
        <h2>
          <b>UPCOMING EVENTS</b>
        </h2>
      </div>
      <div className="shadow p-5">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}>
          <SwiperSlide>
            <div className="b-full">
              <div className="row">
                <div className="col-lg-5 ">
                  <div className="image p-5 h-full w-full"></div>
                </div>
                <div className="col-lg-7 text-color align-self-center">
                  <div className="px-0 py-5 py-lg-0 px-lg-5">
                    <h2>FRESHERS RECRUTMENT</h2>
                    <h5 className="py-2">Calling out to all creative Volunteers</h5>
                    <h5 className="py-2">03/11/2022</h5>
                    <p className="text-dec pt-3 pt-lg-5">
                      MERRY CHRISTMAS 2022! "Wishing you good health, happiness, peace, hope, love,
                      and prosperity this holiday season and in the coming New Year. May the magic
                      of Christmas fill your heart all year long." Design by: Gimhana Deshapriya
                      Content by: Pabodha Oshadari
                    </p>
                    <h5 className="py-2"><strong>#sliit #sliitMedia</strong></h5>
                    <div className="row">
                      <div className="col-md-10">
                      <h5 className="py-2">BY SLIIT FCMU COMMUNITY</h5>
                      </div>
                      <div className="col">
                      <h5 className="py-2">FCMU</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default UpcomingEvents
