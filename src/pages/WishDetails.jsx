import React, { Suspense } from "react";
import { useParams, useLoaderData, Await } from "react-router-dom";
import classes from "./wishDetails.module.css";
import { getPost } from "../api/api";

const userPost = [
  {
    id: `id1`,
    userName: `nathaniel etim`,
    text: `react is interesting`,
  },
  {
    id: `id2`,
    userName: `Jonas Eman`,
    text: `i want to reach the stars but i have been greezing the starts`,
  },
  {
    id: `id3`,
    userName: `Joseph Etim`,
    text: `i am a full start developer `,
  },
  {
    id: `id4`,
    userName: `richard `,
    text: `i will get 1million b4 the end of 2022`,
  },
];

const WishDetails = () => {
  const { id } = useParams();
  const loader = useLoaderData();

  console.log(loader);

  const postDetails = userPost?.filter((user) => {
    return user.id === id;
  });

  return (
    <div>
      <div className={classes.detailContainer}>
        <Suspense>
          <Await resolve={loader}>
            <div className={classes.detailItem} key={postDetails.id}>
              <p>{postDetails.text}</p>
              <span>{postDetails.userName}</span>
            </div>
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default WishDetails;

export async function loader() {
  // const { id } = useParams();
  try {
    const data = await getPost();
    return data;
  } catch (err) {
    console.log(err);
  }
}
