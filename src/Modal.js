import React from "react";
import ReactDom from "react-dom";
import "./App.css";
import Button from "@mui/material/Button";
import {useState,useEffect} from 'react';



let sum =0;
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

export default function Modal({ open, onClose, cartItems}) {
  
  const [count, setCount] = useState(0);

  
  

useEffect(() =>{for(var i=count; i<cartItems.length; i++) {

  setCount(() => cartItems.length) 
  console.log(count)
   sum  = cartItems[i].price + sum;
   sum = Math.round(sum * 100) / 100
   console.log(sum);
}},[cartItems])
  
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div className="border" style={MODAL_STYLES}>
        <Button onClick={onClose} variant="contained">
          Close
        </Button>
        
        {cartItems.map((cartItem)=>(  <> <div className='popup'>
          <img src ={cartItem.image} width='50px' height='50px'/> 
          <p>{cartItem.title}</p>
          <h6>{cartItem.price+'$'}</h6>
            
        </div>
        
        <hr />
    
       
        </>))}
        <div className="total"><h3>Total:</h3> <h1 className="total"> {sum}</h1></div>
 
      </div>
    </>,
    document.getElementById("portal")
  );
}
