import React from "react";
import Layout from "../layouts/tabtwo";
import tabsStyles from "../styles/tabs.module.css";
import Header from "./header";
import Toggle from "./toggleMenu";
import Head from "next/head";
import indexStyles from "../styles/index.module.css";

const PageTwo = () => {
  // return (
  //   <div>
  //     <Head>
  //       <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap" rel="stylesheet" />
  //     </Head>
  //     <Header />
  //     <div className={indexStyles.container}>
  //       <Toggle />

  //       <Layout>
  //         <div className={tabsStyles.content}>This is tab two content</div>
  //       </Layout>
  //     </div>
  //   </div>
  // )
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className={indexStyles.container}>
        <Toggle />

        <div className={tabsStyles.up_header}>
          <h2 className={tabsStyles.website_title}>MAKEUP</h2>
        </div>
        <div className={tabsStyles.site_header}>
          <div className={tabsStyles.site_logo}>
            <img width="20%" src="images/lancome-logo.png" />
            <div className={tabsStyles.logo_text}>MAKEUP</div>
          </div>
          <nav className={tabsStyles.nav}>
            <a className={tabsStyles.nav_a}>Care</a>
            <a className={tabsStyles.nav_a}>Makeup</a>
            <a className={tabsStyles.nav_a}>Fragrances</a>
            <a className={tabsStyles.nav_a}>Where to buy</a>
          </nav>
        </div>
        <div className={tabsStyles.site_container}>
          <div className={tabsStyles.site_content}>
            <div className={tabsStyles.site_img}>
              <img
                width="100%"
                src="https://lancome.ua/storage/app/uploads/public/5da/d70/791/5dad70791a8aa457818069.jpg"
              />
            </div>
            <div className={tabsStyles.site_details}>
              <div className={tabsStyles.product_info}>
                <h3>L'Absolu Rouge</h3>
                <p>
                  Creme de rouge Hydration et Galbe Absolu Pro-Xylane - SPF 12
                </p>
              </div>
              {/* <div className={tabsStyles.tab} >
                <button className={tabsStyles.tablinks}>Presentation</button>
                <button className={tabsStyles.tablinks}>Expertise & Conseils</button>
              </div>
              <div className={tabsStyles.tabcontent} >
                <div className={tabsStyles.tab_aside_left}>
                  <h4>Presentationn</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta accusantium beatae adipisci sit sed
                iste repellat hic quod expedita. Saepe voluptate</p>
                </div>
                <div className={tabsStyles.tab_aside_right} ></div>
                <h5>Choose your color</h5>
                <button>Add to cart</button>
              </div>

              <div className={tabsStyles.tabcontent} >
                <div className={tabsStyles.tab_aside_left}>
                  <h4>Expertise & Conseils</h4>
                  <p>Est, in a perspiciatis nam qui reiciendis aliquid
                odio expedita ut neque sit quibusdam enim inventore</p>
                </div> */}
              {/* <div className={tabsStyles.tab_aside_right} >

              </div>

            </div> */}

              <Layout>
                <div className={tabsStyles.content}>
                  <h4 className={tabsStyles.content_title}>
                    Expertise & Conseils
                  </h4>
                  <p>
                    Est, in a perspiciatis nam qui reiciendis aliquid odio
                    expedita ut neque sit quibusdam enim inventore Est, in a
                    perspiciatis nam qui reiciendis aliquid odio expedita ut
                    neque sit quibusdam enim inventore Est, in a perspiciatis
                    nam qui reiciendis aliquid odio expedita ut neque sit
                    quibusdam enim inventore
                  </p>
                </div>
              </Layout>

              <div className={tabsStyles.footer}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
