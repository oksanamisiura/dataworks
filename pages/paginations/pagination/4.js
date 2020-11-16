
import Head from 'next/head'
// import { useRouter } from 'next/router'
import Header from '../../header'
import Toggle from '../../toggleMenu'
import indexStyles from '../../../styles/index.module.css'
import utilStyles from '../../../styles/utils.module.css'
import paginationStyles from '../../../styles/pagination.module.css'
// import classicsCatStyles from '../styles/classicsCat.modul.css'
import Link from 'next/link'
import Pagination from '../../../components/pagination'

export async function getStaticProps() {
  // fetch list of posts
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_page=4'
  )
  const postList = await response.json()
  return {
    props: {
      postList,
    },
  }
}

export default function IndexPage({ postList }) {
  return (
    <main>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <div className={indexStyles.container}>
        <Toggle />

        <section >
          <div className={paginationStyles.postItem}>


            <ul >
              {postList.map((post) => (
                <Pagination {...post} key={post.id} />
              ))}
            </ul>
            <div >



              <div className={paginationStyles.pages}>
                <Link href="/paginations/pagination/1">
                  <a className={paginationStyles.firstPage}>&#171;</a>
                </Link>
                <Link href="/paginations/pagination/3">
                  <a className={paginationStyles.prevPage}>&#8249;</a>
                </Link>
                <Link href="/paginations/pagination/1">
                  <a className={paginationStyles.inactiveCat}>1</a>
                </Link>
                <Link href="/paginations/pagination/2">
                  <a className={paginationStyles.inactiveCat}>2</a>
                </Link>
                <Link href="/paginations/pagination/3">
                  <a className={paginationStyles.inactiveCat}>3</a>
                </Link>
                <Link href="/paginations/pagination/4">
                  <a className={paginationStyles.activeCat}>4</a>
                </Link>
                <Link href="/paginations/pagination/5">
                  <a className={paginationStyles.inactiveCat}>5</a>
                </Link>
                <Link href="/paginations/pagination/5">
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
  )
}