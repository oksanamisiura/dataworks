import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import indexStyles from '../styles/index.module.css'
import shoppageStyles from '../styles/shoppage.module.css'
import Header from './header'
import Toggle from './toggleMenu'
import Carousel from './carousel'

const ShopPage = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <div className={indexStyles.container}>
        <Toggle />

        <div className={shoppageStyles.main_div}>

          <div className={shoppageStyles.main_block} >

            <div className={shoppageStyles.aside_right_main}>
              <div className={shoppageStyles.aside_right_img} >
                <img width="70%" src="/images/shop-1.jpg" />
              </div>
              <div className={shoppageStyles.aside_right_info} >
                <h3 className={shoppageStyles.aside_right_title}>De'Longhi ECAM35075SI Dinamica with LatteCrema™ Fully Automatic Espresso
            Machine, Silver</h3>
                <div className={shoppageStyles.rating} >
                  <div className={shoppageStyles.rating_stars}  >
                    <ul className={shoppageStyles.rating_result}>
                      <li className={shoppageStyles.li}></li>
                      <li className={shoppageStyles.li}></li>
                      <li className={shoppageStyles.li}></li>
                      <li className={shoppageStyles.li}></li>
                      <li className={shoppageStyles.li}></li>
                    </ul>
                  </div>
                  <div className={shoppageStyles.rating_text} >225 raiting</div>
                </div>
                <p className={shoppageStyles.p} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

              </div> </div> </div>



          <div className={shoppageStyles.aside_left_main} >
            <div className={shoppageStyles.option} >
              <div className={shoppageStyles.delivery_item}>
                <img className={shoppageStyles.delivery_icon} src="/images/icon.png" />
                <div className={shoppageStyles.delivery_text}>Deliver to your city</div>
              </div>
              <div className={shoppageStyles.delivery_region} >Please choose your local shop:</div>
              <select className={shoppageStyles.input} id="input" onChange={() => setValue()}>
                <option value="" hidden disabled selected>Country</option>
                <option>France</option>
                <option>England</option>
                <option>Germany</option>
              </select>
              <div id="output">
                <select className={shoppageStyles.input} id="input">
                  <option>City</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <Carousel />
      </div>
    </div >
  )
}
export default ShopPage;
