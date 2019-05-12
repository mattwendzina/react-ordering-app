import React, { useState } from "react";
import CSS from "./addFoodForm.module.css";
import { isEmpty } from "../../helpers";

const AddFoodForm = ({ menuItems, addItems, setMenuItems }) => {
  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const statusRef = React.createRef();
  const descRef = React.createRef();
  const imageRef = React.createRef();

  const addItem = event => {
    event.preventDefault();
    const newItem = {
      itemName: nameRef.current.value,
      price: priceRef.current.value,
      status: statusRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value
    };
    addItems(newItem);
  };

  const handleChange = (e, idx) => {
    const { name, value } = e.target;

    setMenuItems({ ...menuItems, [idx]: { ...menuItems[idx], [name]: value } });
  };

  return isEmpty(menuItems) ? (
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
        <option value="available">Available</option>
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
  ) : (
    <>
      {Object.keys(menuItems).map((item, idx) => (
        <form key={idx} className={CSS.foodForm} onSubmit={e => addItem(e)}>
          <input
            className={CSS.name}
            name="itemName"
            ref={nameRef}
            type="text"
            placeholder="Name"
            defaultValue={menuItems[item].itemName}
            onChange={e => handleChange(e, idx)}
          />
          <input
            className={CSS.price}
            name="price"
            ref={priceRef}
            type="text"
            placeholder="Price"
            defaultValue={menuItems[item].price}
            onChange={e => handleChange(e, idx)}
          />
          <select
            className={CSS.status}
            name="status"
            ref={statusRef}
            defaultValue={menuItems[item].status}
            onChange={e => handleChange(e, idx)}
          >
            <option value="available">Available</option>
            <option value="unavailable">Sold out</option>
          </select>
          <textarea
            className={CSS.desc}
            name="desc"
            ref={descRef}
            placeholder="Desc"
            defaultValue={menuItems[item].desc}
            onChange={e => handleChange(e, idx)}
          />
          <input
            className={CSS.image}
            name="image"
            ref={imageRef}
            type="text"
            placeholder="Image"
            defaultValue={menuItems[item].image}
            onChange={e => handleChange(e, idx)}
          />
        </form>
      ))}
      <h2>Add another item</h2>
      <form className={CSS.foodForm} onSubmit={addItem}>
        <input
          className={CSS.name}
          name="name"
          ref={nameRef}
          type="text"
          placeholder="Name"
          defaultValue={""}
        />
        <input
          className={CSS.price}
          name="price"
          ref={priceRef}
          type="text"
          placeholder="Price"
          defaultValue={""}
        />
        <select className={CSS.status} name="status" ref={statusRef}>
          <option value="available">Available</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea
          className={CSS.desc}
          name="desc"
          ref={descRef}
          placeholder="Desc"
          defaultValue={""}
        />
        <input
          className={CSS.image}
          name="image"
          ref={imageRef}
          type="text"
          placeholder="Image"
          defaultValue={""}
        />
        <button type="submit"> Add Item </button>
      </form>
    </>
  );
};

export default AddFoodForm;
