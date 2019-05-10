import React from "react";
import CSS from "./inventory.module.css";

import AddFoodForm from "../AddFoodForm";

const Inventory = ({ addItem, loadSampleItems }) => (
  <div className={CSS.inventoryContainer}>
    <h2>Inventory </h2>
    <AddFoodForm addItem={addItem} />
    <button onClick={loadSampleItems}> Load Sample Items </button>
  </div>
);

export default Inventory;
