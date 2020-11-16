import Link from 'next/link'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticPaths() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  )
  const postList = await response.json()
  return {
    paths: postList.map((post) => {
      return {
        params: {
          id: `${post.id}`,
        },
      }
    }),
    fallback: false,
  }
}
// https://app.thedataworks.com/api/training/book?category=sciencefiction

export async function getStaticProps({ params }) {
  // fetch single post detail
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  )
  const post = await response.json()
  return {
    props: post,
  }
}

export default function Post({ title, body }) {
  return (
    <main>
      <Head>
        <title>{title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <header className={utilStyles.header}>

          <img className={utilStyles.logo} src="/images/data-works-logo.svg" />

          <h1 className={utilStyles.h1}>Training Website</h1>
        </header>
        <div className={utilStyles.item_content}>

          <Link href="/">
            <a className={utilStyles.item_btn}>Go back to home</a>
          </Link>
          <div className={utilStyles.item_img}>

            <img src="https://via.placeholder.com/300/09f.png/fff" /></div>
          <h1 className={utilStyles.item_title}>{title}</h1>
          <p className={utilStyles.item_body}>{body}</p>
        </div>
      </div>
    </main>
  )
}