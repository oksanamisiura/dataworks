import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import indexStyles from '../styles/index.module.css'
import basic5Styles from '../styles/basic5.module.css'
import Header from './header'
import Toggle from './toggleMenu'

export default function BasicPage5() {
  const [showText, hideText] = useState(false);
  const [add, minus] = useState(true);
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <div className={indexStyles.container}>
        <Toggle />

        <div className={basic5Styles.main} >
          <div className={basic5Styles.product_img} >
            <div  >
              <img className={basic5Styles.image} src="images/shop-1.jpg" alt="Get your morning coffee" />
            </div>

          </div>
          <div className={basic5Styles.product_info} >
            <div className={basic5Styles.title} >
              De'Longhi ECAM35075SI Dinamica with LatteCrema™ Fully Automatic Espresso Machine, Silver
        </div>
            <div className={basic5Styles.item_description} >
              <button className={basic5Styles.more_btn} onClick={() => { hideText(!showText); minus(!add) }}>{add ? 'Show more info' : ' Hide more info'}</button>

              {
                showText ? <div id="myDiv">
                  <div className={basic5Styles.basic_info} >
                    More info
              </div>  </div> :
                  <div className={basic5Styles.basic_info} >
                    Basic info
              </div>
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

