import React, { useState, useEffect } from "react";
import Head from "next/head";
import * as styles from "./basic.module.scss";
import Header from "../header";
import Toggle from "../toggle-menu";

export default function BasicPage5() {
  const [showText, hideText] = useState(false);
  const [add, minus] = useState(true);
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

        <div className={styles.main}>
          <div className={styles.product_img}>
            <div>
              <img
                className={styles.image}
                src="images/shop-1.jpg"
                alt="Get your morning coffee"
              />
            </div>
          </div>
          <div className={styles.product_info}>
            <div className={styles.title}>
              De'Longhi ECAM35075SI Dinamica with LatteCrema™ Fully Automatic
              Espresso Machine, Silver
            </div>
            <div className={styles.item_description}>
              <button
                className={styles.more_btn}
                onClick={() => {
                  hideText(!showText);
                  minus(!add);
                }}
              >
                {add ? "Show more info" : " Hide more info"}
              </button>

              {showText ? (
                <div id="myDiv">
                  <div className={styles.basic_info}>More info</div>{" "}
                </div>
              ) : (
                <div className={styles.basic_info}>Basic info</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
