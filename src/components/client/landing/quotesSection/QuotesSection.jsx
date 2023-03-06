import React from 'react'
import "./quotesSection.css"

import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import quotes from './quotes.json'

function QuotesSection() {
  return (
    <div className="container-fluid row px-2 pt-4 pb-4 quotesDiv">
      <h1 className="text-center">Quotes </h1>
      <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}>
        {
          quotes.map((quote) => (
            <SwiperSlide>
              <div className="quoteCard">
                <p className="text-center quotesTextParagraph ">
                  {quote.description}
                </p>
                <p className="owner">- {quote.owner} -</p>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default QuotesSection;

