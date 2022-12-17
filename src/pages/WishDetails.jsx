import React, { Suspense } from "react";
import { useParams, useLoaderData, Await } from "react-router-dom";
import classes from "./wishDetails.module.css";
import { getPosts } from "../api/api";

const WishDetails = () => {
  const loader = useLoaderData();
  const { id } = useParams();

  const userDetails = loader.filter((el) => {
    return el.id === id;
  });

  return (
    <div>
      <div className={classes.detailContainer}>
        <Suspense>
          <Await resolve={loader}>
            {userDetails.map((el) => {
              return (
                <div className={classes.detailItem} key={el.id}>
                  <p>{el.post}</p>
                  <span>{el.userName}</span>
                </div>
              );
            })}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default WishDetails;

export async function loader() {
  try {
    const data = await getPosts();
    return data;
  } catch (err) {
    console.log(err);
  }
}
