import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import './Events.css'

function MainEvents({ eventData, mainTitle }) {
  // let data = require('./events.json')
  return (
    <div className="container-fluid my-5">
      <div className="text-center text-color pb-3">
        <h2>
          <b>{mainTitle}</b>
        </h2>
      </div>
      <div className="shadow p-5 px-2 pt-4 pb-4 mx-2">
        <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}>
          {eventData.map((dynamicData) => (
            <SwiperSlide key={dynamicData.id}>
              <div className="b-full">
                <div className="row">
                  <div className="col-lg-5 p-4 p-lg-5">
                    <img className="image h-full " src={dynamicData.imgSrc} />
                  </div>
                  <div className="col-lg-7 text-color align-self-center contentDiv">
                    <div className="px-4 pt-5 py-lg-0 px-lg-5">
                      <h2 id="eventsMainTitle">{dynamicData.title}</h2>
                      <h5 className="py-2 fontWeight600">{dynamicData.subtitle}</h5>
                      <h5 className="py-2 fontWeight600">{dynamicData.date}</h5>
                      <p className="text-dec pt-3 pt-lg-5">{dynamicData.description}</p>
                      {dynamicData.hashtags &&
                        dynamicData.hashtags.map((hash) => (
                          <h5 className="py-2 d-inline" key={hash.id}>
                            <Link className="text-decoration-none" to={hash.link}>
                              <strong>{hash.text + ' '}</strong>
                            </Link>
                          </h5>
                        ))}

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

export default MainEvents
