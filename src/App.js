import API from "./API";
import Category from "./Category";
import Subcategory from "./Subcategory";
import Navigation from "./Navigation";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useState,useEffect } from "react";
import Modal from "./Modal";
import AddProduct from './AddProduct';


import "./navbar.css";
import { NavLink } from "react-router-dom";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

function App() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems,setCartItems] = useState([]);

  




  return (
    <div>
      <div className="margin">
        <div className="nav-bar">
          <NavLink className="a" to="/products" activeStyle={{ color: "red" }}>
            Products
          </NavLink>

          <NavLink className="a" to="/categories">
            Categories
          </NavLink>
          <NavLink className="a" to="/add-product">
            Add-Product
          </NavLink>

          
          <svg
          onClick={() => setIsOpen(true)}
            className="a cart-counter"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="white"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
         
          </svg>
        </div>
      </div>
      

      <Routes>
        <Route exact path="/products" element={<API setCartItems={setCartItems} cartItems={cartItems}/>}></Route>
      </Routes>
      <Routes>
        <Route
          path="/*"
          element={
            <div>
              <div style={BUTTON_WRAPPER_STYLES}>
               

                <Modal open={isOpen} onClose={() => setIsOpen(false)} cartItems={cartItems}/>

              </div>
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/categories"
          element={<Category setData={setData} />}
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/categories/category"
          element={<Subcategory data={data} />}
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/add-product"
          element={<AddProduct />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
