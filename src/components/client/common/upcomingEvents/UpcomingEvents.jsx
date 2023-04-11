import React from 'react'
// import Swiper core and required modules
import {Navigation, Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

import state from './events.json'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import './upcomingEvents.css'

function UpcomingEvents() {
  // let data = require('./events.json')
  return (
    <div className="container mb-5">
      <div className="text-center text-color pb-5">
        <h2>
          <b>UPCOMING EVENTS</b>
        </h2>
      </div>
      <div className="shadow p-5">
        <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}>
          {state.data.map((dynamicData, i) => (
            <SwiperSlide>
              <div className="b-full">
                <div className="row">
                  <div className="col-lg-5 ">
                    <div className="image p-5 h-full w-full"></div>
                  </div>
                  <div className="col-lg-7 text-color align-self-center">
                    <div className="px-0 py-5 py-lg-0 px-lg-5">
                      <h2>{dynamicData.title}</h2>
                      <h5 className="py-2">{dynamicData.subtitle}</h5>
                      <h5 className="py-2">{dynamicData.date}</h5>
                      <p className="text-dec pt-3 pt-lg-5">{dynamicData.description}</p>
                      <h5 className="py-2">
                        <strong>{dynamicData.hashtags}</strong>
                      </h5>
                      <div className="row">
                        <div className="col-md-10">
                          <h5 className="py-2">{dynamicData.by}</h5>
                        </div>
                        <div className="col">
                          <h5 className="py-2">{dynamicData.who}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default UpcomingEvents
