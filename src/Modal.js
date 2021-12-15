import React from "react";
import ReactDom from "react-dom";
import "./App.css";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SubModal from "./SubModal";

let sum = 0;

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal({
  open,
  onClose,
  cartItems,
  setCartItems,
  handleAddToCart,
}) {
  const [count, setCount] = useState(0);
  const [counters, setCounters] = useState(0);

  const calculateTotal = (cartItems) =>
    cartItems.reduce(
      (ack, cartItem) => ack + cartItem.quantity * cartItem.price,
      0
    );

  console.log(cartItems);

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div className="border" style={MODAL_STYLES}>
        <Button onClick={onClose} variant="contained">
          Close
        </Button>

        {cartItems.map((cartItem) => (
          <>
            <SubModal
              cartItem={cartItem}
              cartItems={cartItems}
              setCartItems={setCartItems}
              setCounters={setCounters}
              handleAddToCart={handleAddToCart}
            />
          </>
        ))}

        <div className="total">
          <h3>Total:</h3>{" "}
          <h1 className="total">
            {" "}
            {calculateTotal(cartItems).toFixed(2) + "$"}
          </h1>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
