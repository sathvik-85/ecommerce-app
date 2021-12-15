import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Addsubproduct from "./Addsubproduct";

const API = (props) => {
  const [fetchArr, setfetchArr] = useState([]);
  const [fetchArrtwo, setfetchArrtwo] = useState([]);

  const [data, setdata] = useState(false);

  const array = [...fetchArr, ...fetchArrtwo];

  useEffect(async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        json.map((item) => {
          item.quantity = 1;
          setfetchArr(json);
        });
      });

    setdata(true);
  }, []);

  return (
    <>
      <div className="image">
        {data &&
          array.map((data) => (
            <Card sx={{ maxWidth: 345 }} className="card" key={data.id}>
              <CardMedia
                component="img"
                height="230"
                image={data.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  style={{ color: "#00adb5" }}
                  gutterBottom
                  variant="h4"
                  component="div"
                >
                  {data.price + "$"}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>

                <div className="cartbutton">
                  <Button
                    variant="contained"
                    onClick={() =>
                      props.setCartItems(() => props.handleAddToCart(data))
                    }
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        <Addsubproduct
          setfetchArrtwo={setfetchArrtwo}
          fetchArrtwo={fetchArrtwo}
        />
      </div>
    </>
  );
};

export default API;
