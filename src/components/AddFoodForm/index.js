import React from "react";
import CSS from "./addFoodForm.module.css";

const AddFoodForm = props => {
  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const statusRef = React.createRef();
  const descRef = React.createRef();
  const imageRef = React.createRef();

  const addItem = event => {
    event.preventDefault();
    const newItem = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      status: statusRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value
    };
    props.addItem(newItem);
    event.currentTarget.reset();
  };

  return (
    <form className={CSS.foodForm} onSubmit={addItem}>
      <input
        className={CSS.name}
        name="name"
        ref={nameRef}
        type="text"
        placeholder="Name"
      />
      <input
        className={CSS.price}
        name="price"
        ref={priceRef}
        type="text"
        placeholder="Price"
      />
      <select className={CSS.status} name="status" ref={statusRef}>
        <option value="available">Fresh</option>
        <option value="unavailable">Sold out</option>
      </select>
      <textarea
        className={CSS.desc}
        name="desc"
        ref={descRef}
        placeholder="Desc"
      />
      <input
        className={CSS.image}
        name="image"
        ref={imageRef}
        type="text"
        placeholder="Image"
      />
      <button type="submit"> Add Item </button>
    </form>
  );
};

export default AddFoodForm;
