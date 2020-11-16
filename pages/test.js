// import React, { useState } from "react";
// import Axios from "axios";

// const index = ({ data, data2 }) => {
//   const [loadMore, setLoadMore] = useState(false);
//   return (
//     <div>
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//       {loadMore && (
//         <div>
//           {data2.map((post) => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </div>
//       )}
//       <button onClick={() => setLoadMore(true)}>load more</button>
//     </div>
//   );
// };

// export const getServerSideProps = async () => {
//   const pageNum = 0;
//   const res = await Axios(
//     `https://jsonplaceholder.typicode.com/posts?_start=${pageNum}&_limit=10`
//   );
//   const res2 = await Axios(
//     `https://jsonplaceholder.typicode.com/posts?_start=11&_limit=13`
//   );

//   const data = [...res.data];
//   const data2 = [...res2.data];

//   return {
//     props: {
//       data,
//       data2,
//     },
//   };
// };

// export default index;
import React, { useState } from "react";
import Axios from "axios";

const index = ({ data, newData }) => {
  const [loadMore, setLoadMore] = useState(false);
  return (
    <div>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}

        {loadMore && (
          <div>
            {newData.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </div>
        )}
      </ul>
      <button onClick={() => setLoadMore(true)}>load more</button>
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
