import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Category = (props) => {
  const [clicked, setClicked] = useState(false);
  const images = [
    {
      image:
        "https://c4.wallpaperflare.com/wallpaper/362/897/103/abstract-circuit-computer-detail-wallpaper-preview.jpg",
      category: "electronics",
    },
    {
      image: "https://wallpaperaccess.com/full/3713600.jpg",
      category: "jewelery",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5442b6cce4b0cf00d1a3bef2/1622156084139-LFCJ81PO49CY8JTVO1KU/fair-trade-mens-clothing-boden.jpeg",
      category: "men's clothing",
    },
    {
      image:
        "https://media.istockphoto.com/photos/women-clothes-hanging-on-hangers-clothing-rails-fashion-design-picture-id916092484?k=20&m=916092484&s=612x612&w=0&h=2aTLAucj_-qbbfhBiJEXfdiY3-k0gx0el8OrKFpi3O8=",
      category: "women's clothing",
    },
  ];

  const keyHandler = async (category) => {
    setClicked(!clicked);
    await fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => props.setData(json));
  };

  return (
    <div className="category">
      {!clicked &&
        images.map((image) => (
          <Card
            sx={{ maxWidth: 350 }}
            onClick={() => keyHandler(image.category)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="440"
                image={image.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {image.category}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}

      {clicked && <Navigate replace to="/detail" />}
    </div>
  );
};

export default Category;
