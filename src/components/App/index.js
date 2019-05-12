import React, { useState, useEffect } from "react";
import "./App.css";

// Components
import Header from "../Header";
import Menu from "../Menu";
import Order from "../Order";
import Inventory from "../Inventory";

// Helpers
import { formatter } from "../../helpers";

// Data
import sampleItems from "../../sampleItems";

// Database
import base from "../../base";

const App = props => {
  const [menuItems, setMenuItems] = useState({});
  const [cart, setCart] = useState({});

  const { params } = props.match;

  useEffect(() => {
    const ref = base.syncState(`${params.id}/menuItems`, {
      context: {
        setState: ({ menuItems }) => setMenuItems({ ...menuItems }),
        state: { menuItems }
      },
      state: "menuItems"
    });

    return () => {
      base.removeBinding(ref);
    };
  }, []);

  const addItem = item => {
    const newItem = menuItems;
    newItem[`item${Date.now()}`] = item;
    setMenuItems({ ...menuItems, ...newItem });
  };

  const loadSampleItems = () => {
    setMenuItems({ ...menuItems, ...sampleItems });
  };

  const addToCart = key => {
    const order = cart;
    order[key] = order[key] + 1 || 1;
    setCart({ ...order });
  };

  return (
    <div className="App">
      <Header
        title="Better Burgers"
        city={`${props.match.params.id}`}
        caption="We get em right, first time, every time!"
      />
      <div className="componentsContainer">
        <Menu
          menuItems={menuItems}
          addToCart={addToCart}
          formatter={formatter}
        />
        <Order cart={cart} menuItems={menuItems} />
        <Inventory
          addItem={addItem}
          loadSampleItems={loadSampleItems}
          menuItems={menuItems}
          setMenuItems={setMenuItems}
        />
      </div>
    </div>
  );
};

export default App;
