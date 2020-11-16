import Head from "next/head";
import Header from "../header";
import Toggle from "../toggleMenu";
import indexStyles from "../../styles/index.module.css";
import paginationStyles from "../../styles/pagination.module.css";
import Link from "next/link";
import Pagination from "../../components/pagination";

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
      <Header />
      <div className={indexStyles.container}>
        <Toggle />
        <section>
          <div className={paginationStyles.postItem}>
            <ul>
              {postList.map((post) => (
                <Pagination {...post} key={post.id} />
              ))}
            </ul>
            <div>
              <div className={paginationStyles.pages}>
                <a className={paginationStyles.disabled}>&#171;</a>

                <a className={paginationStyles.disabled}>&#8249;</a>

                <Link href="/paginations/pagination/1">
                  <a className={paginationStyles.activeCat}>1</a>
                </Link>
                <Link href="/paginations/pagination/2">
                  <a className={paginationStyles.inactiveCat}>2</a>
                </Link>
                <Link href="/paginations/pagination/3">
                  <a className={paginationStyles.inactiveCat}>3</a>
                </Link>
                <Link href="/paginations/pagination/4">
                  <a className={paginationStyles.inactiveCat}>4</a>
                </Link>
                <Link href="/paginations/pagination/5">
                  <a className={paginationStyles.inactiveCat}>5</a>
                </Link>
                <Link href="/paginations/pagination/2">
                  <a className={paginationStyles.nextPage}>&#8250;</a>
                </Link>
                <Link href="/paginations/pagination/5">
                  <a className={paginationStyles.lastPage}>&#187;</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
