
// import React, { useState, useEffect } from 'react'
// import modalStyles from '../styles/modal.module.css'

// const Modal = () => {
//   const quotes = [
//     {
//       quote: "I love you the more in that I believe you had liked me for my own sake and for nothing else",
//       author: "John Keats",
//       quote: "I love you the more in that I believe you had liked me for my own sake and for nothing else",
//       author: "John Keats"
//     },
//     {
//       quote: "I have not failed. I've just found 10,000 ways that won't work.",
//       author: "Thomas A. Edison"
//     },
//     {
//       quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
//       author: "Ernest Hemingway"
//     },
//     {
//       quote: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
//       author: "Albert Einstein"
//     },
//     {
//       quote: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
//       author: "Jane Austen"
//     }
//   ];
//   const [quoteData, getQuoteData] = useState(quotes);
//   const [current, setCurrent] = useState(0);
//   const [quote, getQuote] = useState(quoteData[current])

//   useEffect(
//     () => getQuote(quoteData[current]),
//     [current, quote]
//   )

//   const nextQuote = () => {
//     current === quoteData.length - 1 ?
//       setCurrent(0)
//       :
//       setCurrent(current + 1)
//   }

//   const prevQuote = () => {
//     current === 0 ?
//       setCurrent(quoteData.length - 1)
//       :
//       setCurrent(current - 1)
//   }

//   const dotPicksQuote = (e) => setCurrent(Number(e.target.id))

//   console.log(current)
//   return (
//     <section>
//       <div className={modalStyles.slideshow_container} >
//         <Slide quote={quote} />
//         <Arrows nextQuote={nextQuote}
//           prevQuote={prevQuote} />
//       </div>
//       <Dots dotQty={quoteData}
//         current={current}
//         dotPicksQuote={dotPicksQuote} />
//     </section>
//   )
// }

// function Slide({ quote }) {
//   return (
//     <div className={modalStyles.mySlides} >
//       <q>{quote.quote}</q>
//       <p className={modalStyles.author}  >&mdash;{quote.author}</p>
//     </div>
//   )
// }

// function Arrows({ nextQuote, prevQuote }) {
//   return (
//     <>
//       <a onClick={prevQuote} className={modalStyles.prev} id="prev">&#10094;</a>
//       <a onClick={nextQuote} className={modalStyles.next} id="next">&#10095;</a>
//     </>
//   )
// }

// function Dots({ dotQty, current, dotPicksQuote }) {
//   return (
//     <div className={modalStyles.dot_container} >
//       {
//         dotQty.map((dot, i) => {
//           return <span id={i} className={current === i ? "dot active" : "dot"}
//             onClick={dotPicksQuote}></span>
//         })
//       }
//     </div>
//   )
// }
// export default Modal

import React, { useState } from 'react';
import carouselStyles from '../styles/carousel.module.css'

const Carousel = () => {

  const [slides] = useState([
    {
      img: "../images/shop-4.jpg",
      img2: "../images/shop-3.jpg",
      img3: '../images/shop-5.jpg',
      title: "Half Moon Pier",
      title2: "Half Moon Pier2",
      title3: "Half Moon Pier3"

    },
    {
      img: "../images/shop-2.jpg",
      img2: '../images/shop-6.jpg',
      img3: '../images/shop-7.jpg',
      title: "Port Washington Rocks",
      title2: "Port Washington Rocks2",
      title3: "Port Washington Rocks3"
    },

  ]);

  // SET CAROUSEL DEFAULTS
  let [currentPosition, setCurrentPosition] = useState(0); // Initial slide index value
  let currentSlide = slides[currentPosition]; // variable index value we can reference later

  const arrowRightClick = () => {
    currentPosition !== slides.length - 1 ? // Check index length
      setCurrentPosition(currentPosition + 1) : setCurrentPosition(currentPosition = 0);
    currentSlide = slides[currentPosition];
  }

  const arrowLeftClick = () => {
    currentPosition !== 0 ? // Check index length
      setCurrentPosition(currentPosition - 1) : setCurrentPosition(currentPosition = slides.length - 1);
    currentSlide = slides[currentPosition];
  }

  return (
    <div className={carouselStyles.carousel_block} >
      <div className={carouselStyles.flex_container} >
        <div className={carouselStyles.slide} id="slider">
          <h3 className={carouselStyles.carousel_title} >You might also like</h3>
          <div className={carouselStyles.slider_img_container} >
            <div> <img src={currentSlide.img} alt={currentSlide.title} title={currentSlide.title} className={carouselStyles.slider_img} />
              <div>{currentSlide.title}</div></div>
            <div>       <img src={currentSlide.img2} alt={currentSlide.title} title={currentSlide.title} className={carouselStyles.slider_img} />
              <div>{currentSlide.title2}</div></div>
            <div> <img src={currentSlide.img3} alt={currentSlide.title} title={currentSlide.title} className={carouselStyles.slider_img} />
              <div>{currentSlide.title3}</div></div>
            <div>     <img src={currentSlide.img} alt={currentSlide.title} title={currentSlide.title} className={carouselStyles.slider_img} />
              <div>{currentSlide.title}</div></div>

            <div className="arrows">
              <div className={carouselStyles.arrow_left} id="arrow-left" onClick={arrowLeftClick}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
              </svg> </div>
              <div className={carouselStyles.arrow_right} id="arrow-right" onClick={arrowRightClick}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
              </svg></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Carousel;

