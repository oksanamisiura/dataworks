import Link from "next/link";
import * as styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <img className={styles.logo} src="/images/data-works-logo.svg" />
        </a>
      </Link>
      <h1 className={styles.h1}>Training Website</h1>
    </header>
  );
}
