import React, { useState } from "react";
import Head from "next/head";
import Header from "./header";
import Toggle from "./toggleMenu";
import indexStyles from "../styles/index.module.css";
import shopnewStyles from "../styles/shopnew.module.css";
// const blush = "images/blush.jpg";
// const purple = "images/purple_1.jpg";
// const aqua = "images/aqua_1.jpg";
// const shirts = { blush, purple, aqua };

const blush = "images/blush.jpg";
const blush1 = "images/blush_1.jpg";
const blush2 = "images/blush_2.jpg";
const blush3 = "images/blush_3.jpg";
const blushGroup = { blush, blush1, blush2, blush3 };

const purple = "images/purple.jpg";
const purple1 = "images/purple_1.jpg";
const purple2 = "images/purple_2.jpg";
const purple3 = "images/purple_3.jpg";
const purpleGroup = { purple, purple1, purple2, purple3 };

const aqua = "images/aqua.jpg";
const aqua1 = "images/aqua_1.jpg";
const aqua2 = "images/aqua_2.jpg";
const aqua3 = "images/aqua_3.jpg";
const aquaGroup = { aqua, aqua1, aqua2, aqua3 };

export default function ShoppingNew() {
  const [selected, setSelected] = useState(blushGroup);
  const [showMenu, setShowMenu] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);
  const [mainBlush, setMainBlush] = useState(blush);
  const [mainPurple, setMainPurple] = useState(purple);
  const [mainAqua, setMainAqua] = useState(aqua);

  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className={indexStyles.container}>
        <Toggle />
        <div className={shopnewStyles.navbar}>
          <div className={shopnewStyles.dropdown}>
            <a
              className={shopnewStyles.nav_title}
              onClick={() => setShowMenu(!showMenu)}
            >
              Make christmas
            </a>
            {showMenu && (
              <div className={shopnewStyles.dropdown_content}>
                <div className={shopnewStyles.row}>
                  <div className={shopnewStyles.column}>
                    <h3>Christmas Decorating </h3>
                    <div className={shopnewStyles.sub_menu}>
                      Christmas View All
                    </div>
                    <a href="#">Christmas Trees</a>
                    <a href="#">Christmas Lights</a>
                    <a href="#">Tree Decoration</a>
                    <a href="#">Wreaths and Garlands</a>
                    <a href="#">Home Decoration</a>
                    <a href="#">Candies and Holders</a>
                  </div>
                  <div className={shopnewStyles.column}>
                    <h3>Christmas Gifting</h3>
                    <a href="#">Gifts for Her</a>
                    <a href="#">Gifts for Him</a>
                    <a href="#">Gifts for Kids</a>
                    <a href="#">Gifts for Pets</a>
                    <a href="#">Tech Gifts</a>
                    <a href="#">Secret Santa</a>
                    <a href="#">Christmas Eve Box</a>
                    <a href="#">Christmas Stocking Filters</a>
                    <a href="#">Gift Boxes, Bags and Wrap</a>
                    <a href="#">Gift Card</a>
                  </div>
                  <div className={shopnewStyles.column}>
                    <h3>Entertaining at Home</h3>
                    <a href="#">Cooking and baking</a>
                    <a href="#">Table Setting</a>
                    <a href="#">Christmas Cocktails</a>
                  </div>
                  <div className={shopnewStyles.column}>
                    <h3>Christmas Fashion</h3>
                    <a href="#">Matching Family Christmas</a>
                    <a href="#">Christmas Jumpers</a>
                    <a href="#">Christmas Nightwear</a>
                    <a href="#">Festive Clothing</a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <a className={shopnewStyles.nav_title} href="#home">
            new in
          </a>
          <a className={shopnewStyles.nav_title} href="#news">
            women
          </a>
          <a className={shopnewStyles.nav_title} href="#news">
            lingerie
          </a>
          <a className={shopnewStyles.nav_title} href="#news">
            men
          </a>
          <a className={shopnewStyles.nav_title} href="#news">
            home
          </a>
          <a className={shopnewStyles.nav_title} href="#news">
            kids
          </a>
          <a className={shopnewStyles.nav_title} href="#news">
            sale
          </a>
          <a className={shopnewStyles.nav_title} href="#news">
            school
          </a>
          <a className={shopnewStyles.nav_title} href="#news">
            our brands
          </a>
          <a className={shopnewStyles.nav_title} href="#news">
            fresh food
          </a>
        </div>

        <section className={shopnewStyles.menu}>
          <div className={shopnewStyles.section_center}>
            <article className={shopnewStyles.menu_item}>
              <div className={shopnewStyles.all_img}>
                {selected === blushGroup ? (
                  <div>
                    {" "}
                    <div>
                      {" "}
                      <div>
                        {mainBlush === blush ? (
                          <div>
                            {" "}
                            <img
                              className={shopnewStyles.main_img}
                              src={selected.blush}
                              width="50px"
                            />
                          </div>
                        ) : null}
                        {mainBlush === blush1 ? (
                          <div>
                            {" "}
                            <img
                              className={shopnewStyles.main_img}
                              src={selected.blush1}
                              width="50px"
                            />
                          </div>
                        ) : null}
                        {mainBlush === blush2 ? (
                          <div>
                            {" "}
                            <img
                              className={shopnewStyles.main_img}
                              src={selected.blush2}
                              width="50px"
                            />
                          </div>
                        ) : null}
                        {mainBlush === blush3 ? (
                          <div>
                            {" "}
                            <img
                              className={shopnewStyles.main_img}
                              src={selected.blush3}
                              width="50px"
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className={shopnewStyles.rest_img}>
                      <img
                        src={selected.blush}
                        width="50px"
                        className={shopnewStyles.img_item}
                        onClick={() => setMainBlush(blush)}
                      />
                      <img
                        src={selected.blush1}
                        width="50px"
                        className={shopnewStyles.img_item}
                        onClick={() => setMainBlush(blush1)}
                      />
                      <img
                        src={selected.blush2}
                        width="50px"
                        className={shopnewStyles.img_item}
                        onClick={() => setMainBlush(blush2)}
                      />
                      <img
                        src={selected.blush3}
                        width="50px"
                        className={shopnewStyles.img_item}
                        onClick={() => setMainBlush(blush3)}
                      />
                    </div>
                  </div>
                ) : null}
                {selected === purpleGroup ? (
                  <div>
                    <div>
                      <div>
                        {mainPurple === purple ? (
                          <div>
                            {" "}
                            <img
                              className={shopnewStyles.main_img}
                              src={selected.purple}
                              width="50px"
                            />
                          </div>
                        ) : null}
                        {mainPurple === purple1 ? (
                          <div>
                            {" "}
                            <img
                              className={shopnewStyles.main_img}
                              src={selected.purple1}
                              width="50px"
                            />
                          </div>
                        ) : null}
                        {mainPurple === purple2 ? (
                          <div>
                            {" "}
                            <img
                              className={shopnewStyles.main_img}
                              src={selected.purple2}
                              width="50px"
                            />
                          </div>
                        ) : null}
                        {mainPurple === purple3 ? (
                          <div>
                            {" "}
                            <img
                              className={shopnewStyles.main_img}
                              src={selected.purple3}
                              width="50px"
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className={shopnewStyles.rest_img}>
                      <img
                        src={selected.purple}
                        width="50px"
                        className={shopnewStyles.img_item}
                        onClick={() => setMainPurple(purple)}
                      />
                      <img
                        src={selected.purple1}
                        width="50px"
                        className={shopnewStyles.img_item}
                        onClick={() => setMainPurple(purple1)}
                      />
                      <img
                        src={selected.purple2}
                        width="50px"
                        className={shopnewStyles.img_item}
                        onClick={() => setMainPurple(purple2)}
                      />
                      <img
                        src={selected.purple3}
                        width="50px"
                        className={shopnewStyles.img_item}
                        onClick={() => setMainPurple(purple3)}
                      />
                    </div>
                  </div>
                ) : null}
                {selected === aquaGroup ? (
                  <div>
                    <div>
                      <div>
                        {mainAqua === aqua ? (
                          <div>
                            {" "}
                            <img
                              className={shopnewStyles.main_img}
                              src={selected.aqua}
                              width="50px"
                            />
                          </div>
                        ) : null}
                        {mainAqua === aqua1 ? (
                          <div>
                            {" "}
                            <img
                              className={shopnewStyles.main_img}
                              src={selected.aqua1}
                              width="50px"
                            />
                          </div>
                        ) : null}
                        {mainAqua === aqua2 ? (
                          <div>
                            {" "}
                            <img
                              className={shopnewStyles.main_img}
                              src={selected.aqua2}
                              width="50px"
                            />
                          </div>
                        ) : null}
                        {mainAqua === aqua3 ? (
                          <div>
                            {" "}
                            <img
                              className={shopnewStyles.main_img}
                              src={selected.aqua3}
                              width="50px"
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className={shopnewStyles.rest_img}>
                      <img
                        src={selected.aqua}
                        width="50px"
                        className={shopnewStyles.img_item}
                        onClick={() => setMainAqua(aqua)}
                      />
                      <img
                        src={selected.aqua1}
                        width="50px"
                        className={shopnewStyles.img_item}
                        onClick={() => setMainAqua(aqua1)}
                      />
                      <img
                        src={selected.aqua2}
                        width="50px"
                        className={shopnewStyles.img_item}
                        onClick={() => setMainAqua(aqua2)}
                      />
                      <img
                        src={selected.aqua3}
                        width="50px"
                        className={shopnewStyles.img_item}
                        onClick={() => setMainAqua(aqua3)}
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </article>
          </div>
          <div className={shopnewStyles.info_section}>
            <div className={shopnewStyles.item_info}>
              <div className={shopnewStyles.h4}>
                <h4>Girls Hooded Microfleece Zip Through (2-14 Years)</h4>
                <h4 className={shopnewStyles.price}>$14.99</h4>
              </div>
              {selected === purpleGroup ? (
                <div className={shopnewStyles.item_color}>COLOR Purple</div>
              ) : null}
              {selected === blushGroup ? (
                <div className={shopnewStyles.item_color}>COLOR Blush</div>
              ) : null}
              {selected === aquaGroup ? (
                <div className={shopnewStyles.item_color}>COLOR Aqua</div>
              ) : null}
              <div className={shopnewStyles.btn_container}>
                <button
                  className={shopnewStyles.filter_btn_blush}
                  onClick={() => setSelected(blushGroup)}
                ></button>
                <button
                  className={shopnewStyles.filter_btn_purple}
                  onClick={() => setSelected(purpleGroup)}
                ></button>
                <button
                  className={shopnewStyles.filter_btn_aqua}
                  onClick={() => setSelected(aquaGroup)}
                ></button>
              </div>

              <div className={shopnewStyles.selection}>Select Size</div>
              <select className={shopnewStyles.select}>
                <option hidden>Choose your size</option>
                <option>2-3 YRS</option>
                <option>3-4 YRS</option>
                <option>4-5 YRS</option>
                <option>5-6 YRS</option>
                <option>6-7 YRS</option>
                <option>7-8 YRS</option>
                <option>8-9 YRS</option>
                <option>9-10 YRS</option>
                <option>10-11 YRS</option>
                <option>31-32 YRS</option>
                <option>33-34 YRS</option>
              </select>
            </div>
            <button className={shopnewStyles.add_btn}>add to bag</button>
            <p className={shopnewStyles.item_text}>
              In a microfleece design, this wonderfully soft zip-through
              features side pockets and a spacious hood. In a microfleece
              design, this wonderfully soft zip-through features side pockets
              and a spacious hood.
            </p>

            <div className={shopnewStyles.icons}>
              <div>
                <img
                  className={shopnewStyles.icon}
                  width="50%"
                  src="images/icon_1.png"
                />
                <p className={shopnewStyles.icon_text}>Add to wishlist</p>
              </div>
              <div>
                <img
                  className={shopnewStyles.icon}
                  width="50%"
                  src="images/icon_2.png"
                />
                <p className={shopnewStyles.icon_text}>Share</p>
              </div>
            </div>

            <button
              className={shopnewStyles.accordion}
              onClick={() => setShowSize(!showSize)}
            >
              Size & Fit
            </button>
            {showSize && (
              <div className={shopnewStyles.panel}>
                <p>See our size guides</p>
              </div>
            )}

            <button
              className={shopnewStyles.accordion}
              onClick={() => setShowDetails(!showDetails)}
            >
              Details & Care
            </button>
            {showDetails && (
              <div className={shopnewStyles.panel}>
                <ul>Details:</ul>

                <li>100% polyester</li>
                <ul>Care:</ul>

                <li>Wash at 40 degrees</li>
                <li>Wash inside out</li>
                <li>Wash with similar colours</li>
              </div>
            )}

            <button
              className={shopnewStyles.accordion}
              onClick={() => setShowDelivery(!showDelivery)}
            >
              Delivery & Returns
            </button>
            {showDelivery && (
              <div className={shopnewStyles.panel}>
                <p>
                  Customers can avail of up to 5 day delivery when ordered by
                  10pm (Sunday to Friday). Larger items of furniture will arrive
                  in 7 to 10 working days. For more information see, up to 5 day
                  delivery.
                </p>

                <h5>Returns & Exchanges</h5>
                <p>
                  Customers can return an online purchase for a refund or
                  in-store exchange. For more information see, Returns, Refunds
                  and Exchanges.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
