import React from "react";
import { useState } from "react";
import "./App.css";

export default function SubModal({
  cartItem,
 
  setCartItems,
  handleAddToCart,
}) {
  const [counter, setCounter] = useState(1);

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return ack;
          return [...ack, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...ack, item];
        }
      }, [])
    );
  };

  // const decrementHandler = () => {
  //   setCounter(cartItem.quantity = cartItem.quantity - 1);

  // };
  return (
    <>
      <>
        <div
          key={cartItem.id}
          className="popup"
          //   onClick={() => clickedr(cartItem.id)}
        >
          <img src={cartItem.image} width="50px" height="50px" />
          <p>{cartItem.title}</p>
          <h6>{(cartItem.price * cartItem.quantity).toFixed(2) + "$"}</h6>
        </div>

        <div>
          <button id="minus" onClick={() => handleRemoveFromCart(cartItem.id)}>
            <strong>-</strong>
          </button>
          <input
            type="number"
            min="0"
            value={cartItem.quantity}
            style={{ width: "40px", height: "30px" }}
            readonly="readonly"
          />
          <button id="plus" onClick={() => handleAddToCart(cartItem)}>
            <strong>+</strong>
          </button>
        </div>

        <hr />
      </>
    </>
  );
}
