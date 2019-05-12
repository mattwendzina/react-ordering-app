import React from "react";
import CSS from "./inventory.module.css";

import AddFoodForm from "../AddFoodForm";

const Inventory = ({ addItem, loadSampleItems, menuItems, setMenuItems }) => (
  <div className={CSS.inventoryContainer}>
    <h2>Inventory </h2>
    <AddFoodForm
      addItems={addItem}
      menuItems={menuItems}
      setMenuItems={setMenuItems}
    />
    <button onClick={loadSampleItems}> Load Sample Items </button>
  </div>
);

export default Inventory;
