import React from "react";
import Link from "next/link";
import tabsStyles from "../styles/tabs.module.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <nav className={tabsStyles.nav}>
        <Link href="/tabs">
          <a className={tabsStyles.active}>Presentation</a>
        </Link>
        <Link href="/page-two">
          <a className={tabsStyles.inactive}>Expertise & Conseils</a>
        </Link>
      </nav>
      <div>{children}</div>
    </React.Fragment>
  );
};

export default Layout;
