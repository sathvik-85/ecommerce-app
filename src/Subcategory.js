import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState } from "react";

const Subcategory = (props) => {


  return (
    <div className="category">
      {props.data.map((images) => (
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image={images.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {images.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default Subcategory;
