import React from "react";
// import Layout from "../../layouts/tabone";
import Layout from "../../layouts/tabone";
import Tabs from "../../components/Tabs";
import Header from "../header";

import Toggle from "../toggle-menu";
import Head from "next/head";
import * as styles from "./tabs.module.scss";

const PageOne = (props) => {
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

        <div className={styles.up_header}>
          <h2 className={styles.website_title}>MAKEUP</h2>
        </div>
        <div className={styles.site_header}>
          <div className={styles.site_logo}>
            <img width="20%" src="images/lancome-logo.png" />
            <div className={styles.logo_text}>MAKEUP</div>
          </div>
          <nav className={styles.nav}>
            <a className={styles.nav_a}>Care</a>
            <a className={styles.nav_a}>Makeup</a>
            <a className={styles.nav_a}>Fragrances</a>
            <a className={styles.nav_a}>Where to buy</a>
          </nav>
        </div>
        <div className={styles.site_container}>
          <div className={styles.site_content}>
            <div className={styles.site_img}>
              <img
                width="100%"
                src="https://lancome.ua/storage/app/uploads/public/5da/d70/791/5dad70791a8aa457818069.jpg"
              />
            </div>
            <div className={styles.site_details}>
              <div className={styles.product_info}>
                <h3>L'Absolu Rouge</h3>
                <p>
                  Creme de rouge Hydration et Galbe Absolu Pro-Xylane - SPF 12
                </p>
              </div>
              <Layout className={styles.contentcover}>
                <div className={styles.content}>
                  <h4 className={styles.content_title}>Presentation</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Soluta accusantium beatae adipisci sit sed iste repellat hic
                    quod expedita. Saepe voluptate Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Soluta accusantium beatae
                    adipisci sit sed iste repellat hic quod expedita. Saepe
                    voluptate Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Soluta accusantium beatae adipisci sit sed
                    iste repellat hic quod expedita. Saepe voluptate
                  </p>
                </div>
              </Layout>
              <div className={styles.footer}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
