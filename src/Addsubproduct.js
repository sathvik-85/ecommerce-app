import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";



const array = [];

const Addsubproduct = (props) => {
  
  
  const [data, setdata] = useState(false);
  const [dots, setdots] = useState(false);
 

  useEffect(async () => {
   
   
    


      await fetch("https://ecommerce-app-e0059-default-rtdb.firebaseio.com/use.json")
      .then((res) => res.json())
      .then((json) => {
        const newArray = Object.values(json)

       
        
       props.setfetchArrtwo(newArray);
        
      });
    setdata(true);


  }, []);





  const ondotsclickHandler = () => {
    setdots(!dots);
  };



 

  return (null);
};

export default Addsubproduct;
