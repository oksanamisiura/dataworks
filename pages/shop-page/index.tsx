import React, { useState, useEffect } from "react";
import Head from "next/head";
import * as styles from "./shop-page.module.scss";
import Header from "../header";
import Toggle from "../toggle-menu";
import Carousel from "../carousel";

const ShopPage = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="container">
        <Toggle />

        <div className={styles.main_div}>
          <div className={styles.main_block}>
            <div className={styles.aside_right_main}>
              <div className={styles.aside_right_img}>
                <img width="70%" src="/images/shop-1.jpg" />
              </div>
              <div className={styles.aside_right_info}>
                <h3 className={styles.aside_right_title}>
                  De'Longhi ECAM35075SI Dinamica with LatteCrema™ Fully
                  Automatic Espresso Machine, Silver
                </h3>
                <div className={styles.rating}>
                  <div className={styles.rating_stars}>
                    <ul className={styles.rating_result}>
                      <li className={styles.li}></li>
                      <li className={styles.li}></li>
                      <li className={styles.li}></li>
                      <li className={styles.li}></li>
                      <li className={styles.li}></li>
                    </ul>
                  </div>
                  <div className={styles.rating_text}>225 raiting</div>
                </div>
                <p className={styles.p}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>{" "}
            </div>{" "}
          </div>

          <div className={styles.aside_left_main}>
            <div className={styles.option}>
              <div className={styles.delivery_item}>
                <img className={styles.delivery_icon} src="/images/icon.png" />
                <div className={styles.delivery_text}>Deliver to your city</div>
              </div>
              <div className={styles.delivery_region}>
                Please choose your local shop:
              </div>
              <select
                className={styles.input}
                id="input"
                onChange={() => setValue()}
              >
                <option value="" hidden disabled selected>
                  Country
                </option>
                <option>France</option>
                <option>England</option>
                <option>Germany</option>
              </select>
              <div id="output">
                <select className={styles.input} id="input">
                  <option>City</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <Carousel />
      </div>
    </div>
  );
};
export default ShopPage;
