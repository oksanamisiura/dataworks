import Head from 'next/head'
import indexStyles from '../styles/index.module.css'
import altStyles from '../styles/alt.module.css'
import Header from './header'
import Toggle from './toggleMenu'

export default function AltTextPage() {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <div className={indexStyles.container}>
        <Toggle />

        <div className={altStyles.main}>
          <div className={altStyles.product_img}>
            <div className={altStyles.image} >
              <img width="70%" src="images/shop-1.jpg" alt="Get your morning coffee" />
            </div>
            <div className={altStyles.image_text} >Get your morning coffee</div>
          </div>
          <div className={altStyles.product_info}  >
            <div className={altStyles.title}>
              De'Longhi ECAM35075SI Dinamica with LatteCrema™ Fully Automatic Espresso Machine, Silver
        </div>
            <div className={altStyles.item_description} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}