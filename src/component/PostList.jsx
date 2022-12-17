import React, { Suspense } from "react";
import { getPosts } from "../api/api";
import Post from "./Post";
import classes from "./postList.module.css";
import { useLoaderData, Await } from "react-router-dom";

const PostList = () => {
  const loader = useLoaderData();

  let item = <p> Loading ... </p>;

  if (loader.length === 0) {
    item = <p>Wish list is empty 😥 Add item to get started</p>;
  }

  if (loader.length > 0) {
    item = loader.map((el) => {
      return <Post key={el.id} loader={el} />;
    });
  }

  return (
    <div className={classes.postContainer}>
      <Suspense fallback={<p>Loading ... </p>}>
        <Await resolve={loader}>{item}</Await>
      </Suspense>
    </div>
  );
};

export default PostList;

export async function loader() {
  try {
    const postItem = await getPosts();
    return postItem;
  } catch (err) {
    console.log(err);
  }
}
