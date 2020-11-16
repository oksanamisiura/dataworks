import React, { useState } from "react";
import Head from "next/head";
import toggleStyles from "../styles/toggle.module.css";
import Link from "next/link";

export async function getStaticProps() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=2"
  );
  const postListTwo = await response.json();
  return {
    props: {
      postListTwo,
    },
  };
}
// export async function getStaticProps({ params }) {
//   // fetch single post detail
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   );
//   const post = await response.json();
//   return {
//     props: post,
//   };
// }

const Toggle = () => {
  const [showText, hideText] = useState(false);
  const [add, minus] = useState(true);

  return (
    <div>
      {showText && (
        <li>
          <img src="https://via.placeholder.com/300/09f.png/fff" />
          <h2>title</h2>
          <p>body</p>
        </li>
        // <ul>
        //   {post.map((post) => (
        //     <li>
        //       <img src="https://via.placeholder.com/300/09f.png/fff" />
        //       <div>
        //         <h2>{post.title}</h2>
        //         <p>{post.body}</p>
        //       </div>
        //     </li>
        //   ))}
        // </ul>
      )}
      <button onClick={() => hideText(!showText)}>Load more</button>
    </div>
  );
};
export default Toggle;
