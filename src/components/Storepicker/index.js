import React, { useState, useEffect } from "react";
import CSS from "./storepicker.module.css";

const Storepicker = props => {
  const [state, setState] = useState({
    textInput: ""
  });

  const myInput = React.createRef();

  const goToStore = event => {
    event.preventDefault();
    const storeName = myInput.current.value;
    props.history.push(`/store/${storeName}`);
  };

  const textInputHandler = e => {
    const { value } = e.target;
    setState({ textInput: value });
  };

  //Can no longer pass a second argument into setState, so using useEffect instead
  useEffect(() => {
    console.log(state.textInput);
  });

  return (
    <div className={CSS.formContainer} onSubmit={goToStore}>
      <form className={CSS.form}>
        <h1>Better Burgers</h1>
        <h2> Welcome!</h2>
        <p> Please choose a city</p>
        <input
          placeholder="Enter City"
          onChange={textInputHandler}
          value={state.textInput}
          ref={myInput}
        />
        <button> Submit </button>
      </form>
    </div>
  );
};

export default Storepicker;
