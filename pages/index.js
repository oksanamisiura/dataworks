import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import indexStyles from "../styles/index.module.css";
import BookStore from "./bookstore";
import Link from "next/link";
import Header from "./header";

export default function IndexPage() {
  return (
    <body>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />

      <main className={indexStyles.container}>
        <table className={indexStyles.table}>
          <tr className={indexStyles.title}>
            <td className={indexStyles.border_bl_bm} colSpan="7">
              Section: Basic
            </td>
          </tr>

          <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/bookstoreSimple">
                <a>Simple Book Store</a>
              </Link>
            </td>
            <td className={indexStyles.td} colspan="6">
              Work with basic html tags and images. Learn how to extract text
              and use basic string actions.
            </td>
          </tr>
          <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/news">
                <a>News home page</a>
              </Link>
            </td>
            <td className={indexStyles.td} colspan="6">
              Introduction to lists. Extract data from a list of items
            </td>
          </tr>
          <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/shoppage">
                <a>Go Shopping</a>
              </Link>
            </td>
            <td className={indexStyles.td} colSpan="6">
              Hidden data. Learn how to identify where data comes from -
              excercise 1
            </td>
          </tr>
          <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/alt-text-page">
                <a>Go Shopping 2</a>
              </Link>
            </td>
            <td className={indexStyles.td} colSpan="6">
              Hidden data. A bit more difficult, playing Sherlock Holmes with
              data - excercise 2(Alt text)
            </td>
          </tr>
          <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/basic_page_5">
                <a>Go Shopping 3</a>
              </Link>
            </td>
            <td className={indexStyles.td} colSpan="6">
              Hidden data. Extract two divs in html
            </td>
          </tr>

          {/* <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/shopping_page"><a>Go Shopping 5</a></Link>

            </td>
            <td className={indexStyles.td} colSpan="6">Hidden data. Extract the data comes from array </td>
          </tr>
          <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/shopping_new"><a>Shopping new</a></Link>

            </td>
            <td className={indexStyles.td} colSpan="6">Hidden data. Extract the data comes from array and different actions</td>
          </tr>


          <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/pagescroll"><a>Infinite scroll</a></Link>

            </td>
            <td className={indexStyles.td} colSpan="6">Hidden data. Extract data from Infinite scroll (API based)</td>
          </tr> */}
          <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/bookstore">
                <a>Book Store</a>
              </Link>
            </td>
            <td className={indexStyles.td} colSpan="6">
              Hidden data. Extract data from different pages
            </td>
          </tr>
          <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/paginations/pagination">
                <a>Pagination</a>
              </Link>
            </td>
            <td className={indexStyles.td} colSpan="6">
              Hidden data. Extract data from different pages
            </td>
          </tr>
          <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/infinitescroll">
                <a>Infinite scroll</a>
              </Link>
            </td>
            <td className={indexStyles.td} colSpan="6">
              Hidden data. Extract data from different pages
            </td>
          </tr>
          {/* <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/modal"><a>Modal</a></Link>

            </td>
            <td className={indexStyles.td} colSpan="6">Hidden data. Extract data from modal windows</td>
          </tr>
          <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/tabs"><a>Tabs</a></Link>

            </td>
            <td className={indexStyles.td} colSpan="6">Hidden data. Extract data from different tabs</td>
          </tr> */}

          <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/modal">
                <a>Modal</a>
              </Link>
            </td>
            <td className={indexStyles.td} colSpan="6">
              Hidden data. Extract data from modal
            </td>
          </tr>

          <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/tabs">
                <a>Tabs</a>
              </Link>
            </td>
            <td className={indexStyles.td} colSpan="6">
              Hidden data. Extract data from tab
            </td>
          </tr>
          <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/shopping_new">
                <a>Shopping new</a>
              </Link>
            </td>
            <td className={indexStyles.td} colSpan="6">
              Hidden data. Extract the data comes from array and different
              actions
            </td>
          </tr>
          <tr className={indexStyles.title}>
            <td className={indexStyles.border_bl_bm} colspan="7">
              Section:&nbsp;&nbsp;&nbsp;&nbsp; Learning to use the Dataworks
              browser extension tool
            </td>
          </tr>
          <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/css_selectors">
                <a>CSS Selectors</a>
              </Link>
            </td>
            <td className={indexStyles.td} colSpan="6">
              Introduction to CSSselectors
            </td>
          </tr>
          <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/xpath_selectors">
                <a>XPath Selectors</a>
              </Link>
            </td>
            <td className={indexStyles.td} colSpan="6">
              Introduction to XPath Selectors
            </td>
          </tr>
          <tr>
            <td className={indexStyles.td_1} colSpan="1">
              <Link href="/extention_introduction">
                <a>Extension introduction</a>
              </Link>
            </td>
            <td className={indexStyles.td} colSpan="6">
              What are templates
            </td>
          </tr>
        </table>
        <Link href="/test">
          <a>test</a>
        </Link>
        <br />
        <Link href="/text2">
          <a>test</a>
        </Link>
      </main>
    </body>
  );
}
