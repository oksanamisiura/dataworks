import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Post({ title, body, id }) {
  return (
    <li className={utilStyles.listItem}>
      <img className={utilStyles.img} src="https://via.placeholder.com/300/09f.png/fff" />
      <Link href="/books/[id]" as={`/books/${id}`}>
        <h2 className={utilStyles.book_title}>{title}</h2>
      </Link>
      <p>{body}</p>

    </li>
  )
}