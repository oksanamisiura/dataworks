import React from "react";
import Head from "next/head";
import * as styles from "./bookstore-simple.module.scss";
import Toggle from "../toggle-menu";
import Header from "../header";

const BookStoreSimple = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className={styles.container}>
        <Toggle />

        <h2 className={styles.website_title}>Bookstore website</h2>
        <div className={styles.pics_price}>
          <img className={styles.main_item} src="images/img.jpg" />
          <div className={styles.main_book_price}>$20.89</div>
        </div>
        <div>
          <div className={styles.description}>Description:</div>
          <p className={styles.book_desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            error possimus expedita, totam hic excepturi repellat velit quia
            enim? Fugiat consequuntur facilis et fuga quis omnis libero tempore
            maiores obcaecati atque voluptate veritatis excepturi dolorum
            laudantium eligendi odio odit aliquid minima nobis pariatur, dolorem
            non quos perspiciatis qui. Velit fugit eum, nihil iste recusandae
            explicabo molestiae similique quam nam cupiditate doloremque
            perferendis tenetur id magnam ipsa, consequuntur atque eveniet
            laborum labore nesciunt in ad deleniti. Vitae assumenda aliquid
            atque nisi fugit laboriosam praesentium repellat consequatur
            exercitationem! Rerum quidem architecto deleniti enim doloremque sit
            inventore commodi. Labore repellat non aspernatur? Quidem rem
            recusandae, libero rerum nostrum omnis facilis ea corporis cumque?
            Aut repellat tenetur vel aspernatur quod! Ea tempora magni,
            voluptates, quasi inventore doloremque consequuntur reprehenderit
            delectus quo beatae quibusdam voluptatibus necessitatibus
            repudiandae laudantium nulla eius vitae hic quas rerum incidunt
            dolorem neque quaerat mollitia officiis! Repellat eum asperiores
            maiores? Aliquam iusto dignissimos eligendi animi sit suscipit
            cumque perspiciatis ratione culpa inventore dolorum qui ad voluptas
            quo, neque asperiores quis molestiae placeat, molestias dicta
            doloremque autem officia dolorem! Doloremque sequi aliquam magni
            illo autem totam, saepe ipsa officia non ducimus obcaecati ipsam et
            nobis eligendi veritatis odio, ad quisquam quam temporibus?
          </p>
        </div>
      </div>
    </div>
  );
};
export default BookStoreSimple;
