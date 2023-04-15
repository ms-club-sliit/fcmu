import React, {useEffect} from 'react'
import './latestNotice.css'

import notice1 from './../../../../assets/images/notice/notice1.webp'
import notice2 from './../../../../assets/images/notice/notice2.webp'
import notice3 from './../../../../assets/images/notice/notice3.webp'
import notice4 from './../../../../assets/images/notice/notice4.webp'

function LatestNotice() {
  const images = [notice1, notice2, notice3, notice4]

  useEffect(() => {
    if (images.length === 0) {
      return
    }

    const track = document.querySelector('.carousel__track')
    const slides = Array.from(track.children)
    const dotsNav = document.querySelector('.carousel__nav')
    const dots = Array.from(dotsNav.children)
    const slideWidth = slides[0].getBoundingClientRect().width

    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px'
    }
    slides.forEach(setSlidePosition)

    let slideIndex = 0

    const moveSlides = (track, currentSlide, targetSlide) => {
      track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
      currentSlide.classList.remove('current-slide')
      targetSlide.classList.add('current-slide')
    }

    const updateDots = (currentDot, targetDot) => {
      currentDot.classList.remove('current-slide')
      targetDot.classList.add('current-slide')
    }

    const nextSlide = () => {
      const currentSlide = track.querySelector('.current-slide')
      const currentDot = dotsNav.querySelector('.current-slide')
      slideIndex = (slideIndex + 1) % slides.length
      const targetSlide = slides[slideIndex]
      moveSlides(track, currentSlide, targetSlide)
      updateDots(currentDot, dots[slideIndex])
    }

    let slideTimer = setInterval(nextSlide, 5000)

    dotsNav.addEventListener('click', (e) => {
      const targetDot = e.target.closest('button')
      if (!targetDot) return
      clearInterval(slideTimer)
      const currentSlide = track.querySelector('.current-slide')
      const currentDot = dotsNav.querySelector('.current-slide')
      slideIndex = dots.findIndex((dot) => dot === targetDot)
      const targetSlide = slides[slideIndex]
      moveSlides(track, currentSlide, targetSlide)
      updateDots(currentDot, targetDot)
      slideTimer = setInterval(nextSlide, 5000)
    })

    return () => clearInterval(slideTimer)
  }, [images])

  return (
    <div className="latestNotices">
      <div className="slideshow-container">
        <h2>LATEST NOTICES </h2>
      </div>
      <div className="carousel">
        <div className="carousel_track-container">
          <ul className="carousel__track">
            {images.length > 0 ? (
              images.map((image, index) => (
                <li key={index} className="carousel_slide current-slide">
                  <img
                    className="carousel-images"
                    src={image}
                    alt="notice"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = require('../../../../assets/images/notice/error.webp')
                    }}
                  />
                </li>
              ))
            ) : (
              <li className="carousel_slide current-slide">
                <div className="carousel-blank-slide">Latest Notices</div>
              </li>
            )}
          </ul>
        </div>
        {images.length > 0 && (
          <div className="carousel__nav">
            {images.map((_, index) => (
                <button
                    key={index}
                    className={index === 0 ? 'carousel_indicator current-slide' : 'carousel_indicator'}
                ></button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default LatestNotice
