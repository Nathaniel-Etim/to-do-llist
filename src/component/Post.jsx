import React from "react";
import classes from "./postList.module.css";
import { useNavigate } from "react-router-dom";

const Post = (props) => {
  const navigate = useNavigate();

  const { userName, post, id } = props.loader;
  const viewDetiles = () => {
    console.log(userName, id);

    navigate(`/home/${id}`);
  };

  return (
    <div className={classes.postList} id={id} onClick={viewDetiles}>
      <div id={id}>
        <p> {post} </p>
        <span> {userName} </span>
      </div>
    </div>
  );
};

export default Post;
