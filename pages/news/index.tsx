import Head from "next/head";
import * as styles from "./news.module.scss";
import Header from "../header";
import Toggle from "../toggle-menu";

export default function News() {
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

        <h2 className={styles.news_title}> Worlds News</h2>
        <div className={styles.header_block}>
          <ul className={styles.ul}>
            <li className={styles.header_block_item}>
              <img width="80%" src="images/news-1.jpg" />
              <h3>
                She Was in Labor. Floodwaters Were Rising. Then the Boat Tipped
                Over.
              </h3>
              <p className={styles.header_item_text}>
                A pregnant woman who drowned was one of at least 114 people
                killed in record-breaking floods
              </p>
            </li>
            <li className={styles.header_block_item}>
              <img width="80%" src="images/news-11.jpg" />
              <h3>Unexpected Love Affair With Wine</h3>
              <p className={styles.header_item_text}>
                Our correspondent was seduced by picturesque wine region. There
                was just one problem: Finding the wine back home.
              </p>
            </li>
            <li className={styles.header_block_item}>
              <img width="80%" src="images/news-12.jpg" />
              <h3>Masked Rap Diva, an Era of Face Coverings Poses a Dilemma</h3>
              <p className={styles.header_item_text}>
                Myss Keta, the mysterious Queen of the Night and an authority on
                life behind the surgical veil, was on the brink of celebrity.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.bottom_block}>
          <ul className={styles.ul}>
            <li className={styles.bottom_block_item}>
              <img
                className={styles.bottom_card_img}
                width="80%"
                src="images/news-4.png"
              />
              <p> Where Second Wave Is Filling Up Hospitals</p>
            </li>
            <li className={styles.bottom_block_item}>
              <img
                className={styles.bottom_card_img}
                width="80%"
                src="images/news-5.jpg"
              />
              <p> A #MeToo Awakening Stirs</p>
            </li>
            <li className={styles.bottom_block_item}>
              <img
                className={styles.bottom_card_img}
                width="80%"
                src="images/news-6.jpg"
              />

              <p>E.U. Debates Whether a Veggie Burger Is Really a Burger</p>
            </li>
            <li className={styles.bottom_block_item}>
              <img
                className={styles.bottom_card_img}
                width="80%"
                src="images/news-13.jpg"
              />
              <p>
                {" "}
                2 Broke Artists Started a Bakery at Home. It’s a Pandemic Hit.
              </p>
            </li>
            <li className={styles.bottom_block_item}>
              <img
                className={styles.bottom_card_img}
                width="80%"
                src="images/news-8.jpg"
              />
              <p>
                {" "}
                ‘We Are Not Going to Lie Down’: A Coronavirus Revolt in the wold
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
