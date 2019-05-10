import React from "react";
import CSS from "./header.module.css";

const Header = ({ title, caption, city }) => (
  <header className={CSS.headerContainer}>
    <h1 className={CSS.headerTitle}> {title} </h1>
    <h2 className={CSS.city}>{city} </h2>
    <h3> {caption} </h3>
  </header>
);

export default Header;
