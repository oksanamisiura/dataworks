import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={utilStyles.header}>
      <Link href="/">
        <a><img className={utilStyles.logo} src="/images/data-works-logo.svg" /></a>
      </Link>
      <h1 className={utilStyles.h1}>Training Website</h1>
    </header>
  )
}