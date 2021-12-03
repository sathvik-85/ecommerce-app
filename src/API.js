import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

let count = 0;
const arr = [];

const API = (props) => {
  const [fetchArr, setfetchArr] = useState([]);
  const [data, setdata] = useState(false);
  const [dots, setdots] = useState(false);

  useEffect(async () => {
   
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setfetchArr(json);
        
      });

    

    setdata(true);
  }, [fetchArr,arr]);

  const ondotsclickHandler = () => {
    setdots(!dots);
  };


  
 

  return (
    <>
      
      <div className="image">
        {data &&
          fetchArr.map((data) => (
            <Card
              sx={{ maxWidth: 345 }}
              className="card"
              key={data.id}
              
            >
              <CardMedia
                component="img"
                height="230"
                image={data.image}
                alt="green iguana"
              />
              <CardContent >
              <Typography style={{color:"#00adb5"}} gutterBottom variant="h4" component="div">
                  {data.price+'$'}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.description.length > 25
                    ? data.description.substring(0, 150) + "..."
                    : data.description}
                </Typography>
                <div className="button" >
                  <div onClick={ondotsclickHandler} >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-three-dots"
                      viewBox="0 0 16 16"
                      
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </div>
                  {dots &&  (
                    <div key={data.id}>
                      <Button variant="contained" onClick= { () => props.setCartItems(arr =>[...arr, {...data}])}>Add to Cart</Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
};

export default API;
