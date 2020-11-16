import Head from "next/head";
import Header from "../header";
import Toggle from "../toggle-menu";
import * as styles from "./bookstore.module.scss";
import Link from "next/link";
import Post from "../../components/post";

export async function getStaticProps() {
  // fetch list of posts
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=1"
  );
  const postList = await response.json();
  return {
    props: {
      postList,
    },
  };
}

export default function BookStore({ postList }) {
  return (
    <main>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="main_container">
        <Header />
        <div className="container">
          <Toggle />
        </div>
        <section className={`${styles.headingMd} ${styles.padding1px}`}>
          <div className={styles.main}>
            <div className={styles.catalog}>
              <div className={styles.Books}>Books</div>
              <div className={styles.categories}>
                <Link href="/classics">
                  <a>Classics</a>
                </Link>
                <Link href="/philosophy">
                  <a>Philosophy</a>
                </Link>
                <Link href="/romance">
                  <a>Romance</a>
                </Link>
              </div>
            </div>
            <ul className={styles.list}>
              {postList.map((post) => (
                <Post {...post} key={post.id} />
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
