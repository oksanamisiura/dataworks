import React, { useState } from "react";
import Axios from "axios";
import Head from "next/head";
import indexStyles from "../styles/index.module.css";
import Header from "./header";
import Toggle from "./toggleMenu";
import paginationStyles from "../styles/pagination.module.css";

const index = ({ data, newData, btns }) => {
  const [loadMore, setLoadMore] = useState(false);
  console.log(btns);
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
        <div>
          <ul>
            {data.map((post) => (
              <li className={paginationStyles.listItem} key={post.id}>
                <div>{post.title}</div>
              </li>
            ))}

            {loadMore && (
              <div>
                {newData.map((post) => (
                  <li className={paginationStyles.listItem} key={post.id}>
                    <div>{post.title}</div>
                  </li>
                ))}
              </div>
            )}
          </ul>
          <button onClick={() => setLoadMore(true)}>load more</button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const pageNum = 0;
  const res = await Axios(
    `https://jsonplaceholder.typicode.com/posts?_start=${pageNum}&_limit=10`
  );

  const newRes = await Axios(
    `https://jsonplaceholder.typicode.com/posts?_start=${
      pageNum + 10
    }&_limit=10`
  );

  const data = [...res.data];
  const newData = [...newRes.data];

  return {
    props: {
      data,
      newData,
    },
  };
};

export default index;
