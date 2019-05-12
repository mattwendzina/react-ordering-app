import React from "react";
import CSS from "./menu.module.css";

const Menu = ({ menuItems, addToCart, formatter }) => {
  return (
    <div className={CSS.menuContainer}>
      <h2>Menu</h2>
      <ul>
        {Object.keys(menuItems).map(key => (
          <div key={key} index={key} className={CSS.foodItemsContainer}>
            <img
              className={CSS.image}
              src={menuItems[key].image}
              alt={menuItems[key].itemName}
            />
            <div className={CSS.infoContainer}>
              <h3>{menuItems[key].itemName}</h3>
              <p>{menuItems[key].desc}</p>
              <p>{formatter.format(menuItems[key].price / 100)}</p>
            </div>
            <button
              disabled={menuItems[key].status !== "available"}
              className={
                menuItems[key].status !== "available" && CSS.notAvailable
              }
              onClick={() => addToCart(key)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
