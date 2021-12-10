import React from "react";
import {useState} from "react";
import "./App.css";

export default function SubModal({cartItem,setCounters,cartItems,setCartItems}) {
  const [counter, setCounter] = useState(1);
  const incrementHandler = () => {
    setCounter((counter) =>cartItem.quantity =counter + 1);
    setCounters(counter);
    // console.log(cartItem)
  };

  const decrementHandler = () => {
    setCounter((counter) => cartItem.quantity = counter - 1);
    
   
  };
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
          <h6>{cartItem.price * counter + "$"}</h6>
        </div>

        <div key={cartItem.id}>
          <button id="minus" onClick={decrementHandler}>
            <strong>-</strong>
          </button>
          <input
            type="text"
            value={counter}
            style={{ width: "40px", height: "30px" }}
            readonly="readonly"
          />
          <button id="plus" onClick={incrementHandler}>
            <strong>+</strong>
          </button>
        </div>

        <hr />
      </>
    </>
  );
}
