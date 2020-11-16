import Head from "next/head";
import * as styles from "./alt.module.scss";
import Header from "../header";
import Toggle from "../toggle-menu";

export default function AltTextPage() {
  return (
    <div>
      <Header />
      <div className="container">
        <Toggle />

        <div className={styles.main}>
          <div className={styles.product_img}>
            <div className={styles.image}>
              <img
                width="70%"
                src="images/shop-1.jpg"
                alt="Get your morning coffee"
              />
            </div>
            <div className={styles.image_text}>Get your morning coffee</div>
          </div>
          <div className={styles.product_info}>
            <div className={styles.title}>
              De'Longhi ECAM35075SI Dinamica with LatteCrema™ Fully Automatic
              Espresso Machine, Silver
            </div>
            <div className={styles.item_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
