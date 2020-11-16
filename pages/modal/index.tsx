import React, { useState } from "react";
import Head from "next/head";
import * as styles from "./modal.module.scss";
import Header from "../header";
import Toggle from "../toggle-menu";
import Carousel from "../carousel";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import modalStyles from "../styles/modal.module.css";

export default function App() {
  const [showSize, setShowSize] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);
  // const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="container">
        <Toggle />

        <h2 className={styles.website_title}>Modal</h2>
        <div className={styles.site_header}>
          <div className={styles.pm_logo}>
            <img className={styles.img} src="images/pm-logo.png" />
          </div>
          <nav className={styles.nav}>
            <a className={styles.a}>About us</a>
            <a className={styles.a}>Sports Betting Africa</a>
            <a className={styles.a}>Betting Group</a>
            <a className={styles.a}>Consultants</a>
          </nav>
        </div>

        <div className={styles.main}>
          <div className={styles.main_aside_left}>
            <h3>Sports betting</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, at optio ipsa repellat iure natus. Alias magni
              corrupti labore expedita, in voluptate ex, iste nulla dolore quos
              quidem. Corrupti minima repudiandae modi ducimus, asperiores et
              obcaecati odit quo vero iste? Doloremque veniam at aliquid
              recusandae repellendus dolore? Nam obcaecati impedit voluptas
              enim! Odit, consectetur. Voluptates cum et officia ex. Enim quidem
              ab consectetur quibusdam odit, earum maxime, placeat repellendus
              repudiandae eaque necessitatibus iusto et voluptates tempora. Nam
              ipsam accusantium, quas fugiat assumenda vitae, dolores debitis
              aspernatur, sunt blanditiis molestiae quia voluptates aliquam
              alias a eius vero quisquam dignissimos repellat tempore eveniet
              culpa provident.
            </p>
            <div className={styles.modal_div}>
              <div onClick={toggleModal} className={styles.button}>
                more about company
                {showModal && (
                  <div className={styles.Modal}>
                    <div className={styles.Component}>
                      <div className={styles.close}>&#215;</div>
                      <div>
                        MODAL Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Quae et id, provident deleniti
                        reiciendis cum optio a porro sint doloribus nemo culpa
                        excepturi cumque aut itaque amet sapiente ullam dolore.
                        Ea quidem sed labore deleniti cumque hic culpa, aperiam
                        incidunt error. Qui cupiditate laudantium, nihil facilis
                        similique sunt veniam numquam nisi iusto assumenda a
                        placeat incidunt, deserunt sit ut labore, explicabo ex
                        quisquam consequuntur quasi aspernatur id rerum facere
                        quidem. Ipsum perspiciatis illum voluptatem! Repudiandae
                        reprehenderit quae non, unde dolorum nulla ducimus,
                        consectetur, totam nostrum in explicabo cupiditate
                        necessitatibus natus nihil blanditiis! In placeat
                        voluptate sapiente. Pariatur, in quas! Vitae laboriosam
                        est magnam asperiores dolor praesentium repellendus
                        harum tempore in saepe non corporis iure repudiandae
                        sapiente cumque, pariatur, tempora dolore quod voluptas
                        laborum nulla? Numquam magni tempore, excepturi
                        repudiandae perferendis inventore ipsa corporis incidunt
                        eos ducimus ipsam illum nulla iste vel at perspiciatis
                        totam sed fugiat nemo voluptates? Saepe, quae?
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.main_aside_right}>
            <div className={styles.modal_logo}>
              <img width="50%" src="images/modal-logo-2.png" />
            </div>

            <div>
              <button
                className={styles.accordion}
                onClick={() => setShowSize(!showSize)}
              >
                Size & Fit
              </button>
              {showSize && (
                <div className={styles.panel}>
                  <p>See our size guides</p>
                </div>
              )}

              <button
                className={styles.accordion}
                onClick={() => setShowDetails(!showDetails)}
              >
                Details & Care
              </button>
              {showDetails && (
                <div className={styles.panel}>
                  <ul>Details:</ul>

                  <li>100% polyester</li>
                  <ul>Care:</ul>

                  <li>Wash at 40 degrees</li>
                  <li>Wash inside out</li>
                  <li>Wash with similar colours</li>
                </div>
              )}

              <button
                className={styles.accordion}
                onClick={() => setShowDelivery(!showDelivery)}
              >
                Delivery & Returns
              </button>
              {showDelivery && (
                <div className={styles.panel}>
                  <p>
                    Customers can avail of up to 5 day delivery when ordered by
                    10pm (Sunday to Friday). Larger items of furniture will
                    arrive in 7 to 10 working days. For more information see, up
                    to 5 day delivery.
                  </p>

                  <h5>Returns & Exchanges</h5>
                  <p>
                    Customers can return an online purchase for a refund or
                    in-store exchange. For more information see, Returns,
                    Refunds and Exchanges.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
