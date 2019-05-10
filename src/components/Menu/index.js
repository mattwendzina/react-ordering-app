import React from "react";
import CSS from "./menu.module.css";

const Menu = ({ foodItems }) => (
  <div className={CSS.menuContainer}>
    <h2>Menu</h2>
    <ul>
      {Object.keys(foodItems).map(key => (
        <div className={CSS.foodItemsContainer}>
          {/* <p key={key}>{foodItems[key].name}</p> */}
          <img className={CSS.image} src={foodItems[key].image} />
        </div>
      ))}
    </ul>
  </div>
);

export default Menu;
