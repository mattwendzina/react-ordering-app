import React, { useState } from "react";
import "./App.css";
// import Storepicker from "../Storepicker";
import Header from "../Header";
import Menu from "../Menu";
import Order from "../Order";
import Inventory from "../Inventory";

import sampleItems from "../../sampleItems";

const App = props => {
  const [state, setState] = useState({
    foodItems: {},
    order: {}
  });

  const addItem = item => {
    const newItem = state.foodItems;
    newItem[`item${Date.now()}`] = item;
    setState({ ...state, foodItems: newItem });
    console.log(state);
  };

  const loadSampleItems = () => {
    setState({ ...state, foodItems: sampleItems });
    console.log(state);
  };

  return (
    <div className="App">
      <Header
        title="Better Burgers"
        city={`${props.match.params.id}`}
        caption="We get em right, first time, every time!"
      />
      <div className="componentsContainer">
        <Menu foodItems={state.foodItems} />
        <Order />
        <Inventory addItem={addItem} loadSampleItems={loadSampleItems} />
      </div>
    </div>
  );
};

export default App;
