import React from "react";
import CSS from "./order.module.css";
import { formatter } from "../../helpers";

const Order = ({ cart, menuItems }) => {
  console.log("menu:", menuItems[1]);
  const cartIds = Object.keys(cart);
  console.log("cartIds:", cartIds);
  const total = cartIds.reduce((prevTotal, key) => {
    const item = menuItems[key];
    console.log(item);
    const count = cart[key];
    console.log(count);
    const isAvailable = item && item.status === "available";
    if (isAvailable) {
      return prevTotal + count * item.price;
    }
    return prevTotal;
  }, 0);

  return (
    <div className={CSS.orderContainer}>
      <h2>Order</h2>
      <div className={CSS.orders}>
        <ul>
          {cartIds.map(key => (
            <li key={key} className={CSS.orderItem}>
              <h3>{menuItems[key].itemName}</h3>
              <p>
                {formatter.format((cart[key] * menuItems[key].price) / 100)}
              </p>
            </li>
          ))}
        </ul>
        <h3> Total: {formatter.format(total / 100)}</h3>
      </div>
    </div>
  );
};

export default Order;
