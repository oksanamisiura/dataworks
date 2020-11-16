import Head from "next/head";
// import { useRouter } from 'next/router'
import utilStyles from "../styles/utils.module.css";
// import classicsCatStyles from '../styles/classicsCat.modul.css'
import Link from "next/link";
import Post from "../../components/post";

export async function getStaticProps() {
  // fetch list of posts
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=4"
  );
  const postList = await response.json();
  return {
    props: {
      postList,
    },
  };
}

export default function IndexPage({ postList }) {
  return (
    <main>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={utilStyles.main_container}>
        <header className={utilStyles.header}>
          <img className={utilStyles.logo} src="/images/data-works-logo.svg" />

          <h1 className={utilStyles.h1}>Training Website</h1>
        </header>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className={utilStyles.main}>
            <div className={utilStyles.catalog}>
              <Link href="/">
                <a className={utilStyles.Books}>Books</a>
              </Link>

              <div className={utilStyles.categories}>
                <Link href="/classics">
                  <a>Classics</a>
                </Link>
                <Link href="/philosophy">
                  <a>Philosophy</a>
                </Link>
                <Link href="/romance">
                  <a className={utilStyles.activeCat}>Romance</a>
                </Link>
              </div>
            </div>
            <div className={utilStyles.list}>
              {postList.map((post) => (
                <Post {...post} key={post.id} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
