import React, { useState } from "react";
import * as styles from "./carousel.module.scss";

const Carousel = () => {
  const [slides] = useState([
    {
      img: "../images/shop-4.jpg",
      img2: "../images/shop-3.jpg",
      img3: "../images/shop-5.jpg",
      title: "Half Moon Pier",
      title2: "Half Moon Pier2",
      title3: "Half Moon Pier3",
    },
    {
      img: "../images/shop-2.jpg",
      img2: "../images/shop-6.jpg",
      img3: "../images/shop-7.jpg",
      title: "Port Washington Rocks",
      title2: "Port Washington Rocks2",
      title3: "Port Washington Rocks3",
    },
  ]);

  // SET CAROUSEL DEFAULTS
  let [currentPosition, setCurrentPosition] = useState(0); // Initial slide index value
  let currentSlide = slides[currentPosition]; // variable index value we can reference later

  const arrowRightClick = () => {
    currentPosition !== slides.length - 1 // Check index length
      ? setCurrentPosition(currentPosition + 1)
      : setCurrentPosition((currentPosition = 0));
    currentSlide = slides[currentPosition];
  };

  const arrowLeftClick = () => {
    currentPosition !== 0 // Check index length
      ? setCurrentPosition(currentPosition - 1)
      : setCurrentPosition((currentPosition = slides.length - 1));
    currentSlide = slides[currentPosition];
  };

  return (
    <div className={styles.carousel_block}>
      <div className={styles.flex_container}>
        <div className={styles.slide} id="slider">
          <h3 className={styles.carousel_title}>You might also like</h3>
          <div className={styles.slider_img_container}>
            <div>
              {" "}
              <img
                src={currentSlide.img}
                alt={currentSlide.title}
                title={currentSlide.title}
                className={styles.slider_img}
              />
              <div>{currentSlide.title}</div>
            </div>
            <div>
              {" "}
              <img
                src={currentSlide.img2}
                alt={currentSlide.title}
                title={currentSlide.title}
                className={styles.slider_img}
              />
              <div>{currentSlide.title2}</div>
            </div>
            <div>
              {" "}
              <img
                src={currentSlide.img3}
                alt={currentSlide.title}
                title={currentSlide.title}
                className={styles.slider_img}
              />
              <div>{currentSlide.title3}</div>
            </div>
            <div>
              {" "}
              <img
                src={currentSlide.img}
                alt={currentSlide.title}
                title={currentSlide.title}
                className={styles.slider_img}
              />
              <div>{currentSlide.title}</div>
            </div>

            <div className="arrows">
              <div
                className={styles.arrow_left}
                id="arrow-left"
                onClick={arrowLeftClick}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
                </svg>{" "}
              </div>
              <div
                className={styles.arrow_right}
                id="arrow-right"
                onClick={arrowRightClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
