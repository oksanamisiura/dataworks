import Head from 'next/head'
import Header from './header'
import Toggle from './toggleMenu'
// import { useRouter } from 'next/router'
import utilStyles from '../styles/utils.module.css'
import indexStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Post from '../components/post'

export async function getStaticProps() {
  // fetch list of posts
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_page=1'
  )
  const postList = await response.json()
  return {
    props: {
      postList,
    },
  }
}

export default function BookStore({ postList }) {
  return (
    <main>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <div className={utilStyles.main_container}>
        <Header />
        <div className={indexStyles.container}>
          <Toggle />
        </div>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className={utilStyles.main}>

            <div className={utilStyles.catalog}>
              <div className={utilStyles.Books}>Books</div>
              <div className={utilStyles.categories}>
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
            <ul className={utilStyles.list}>
              {postList.map((post) => (
                <Post {...post} key={post.id} />
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}