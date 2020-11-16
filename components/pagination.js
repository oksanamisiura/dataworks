import Link from 'next/link'

import paginationStyles from '../styles/pagination.module.css'

export default function Post({ title, body, id }) {
  return (
    <li className={paginationStyles.listItem}>
      <img className={paginationStyles.img} src="https://via.placeholder.com/300/09f.png/fff" />
      <div className={paginationStyles.postItem} >
        <Link href="/pagination/[id]" as={`/pagination/${id}`}>
          <h2 className={paginationStyles.book_title}>{title}</h2>
        </Link>
        <p>{body}</p>
      </div>
    </li>
  )
}