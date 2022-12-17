import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";
import classes from "./root.module.css";

const Root = () => {
  return (
    <>
      <NavBar />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
