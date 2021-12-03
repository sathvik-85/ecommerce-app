import "./addproduct.css";
import React from "react";
import Button from "@material-ui/core/Button";

export default function AddProduct(props) {



const onSubmitHandler = async (e) =>{

     e.preventDefault();
    const  title = e.target[0].value;
    const  price = e.target[1].value;
    const  category = e.target[2].value;
    const  description = e.target[3].value;
    const  image = e.target[4].value;
    
     
    await fetch('https://ecommerce-app-e0059-default-rtdb.firebaseio.com/use.json', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title,price,category,description,image})
      });
}




  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="input-format" >
          <div>
            <label for="title">
              <strong>Title</strong>
            </label>
            <input type="text" name="title" />
          </div>
          <div>
            <label for="price">
              <strong>Price</strong>
            </label>
            <input type="number" name="price" />
          </div>
          <div>
            <label for="category">
              <strong>Category</strong>
            </label>
            <input type="text" name="category" />
          </div>
          <div>
            <label for="description">
              <strong>Description</strong>
            </label>
            <textarea name="description" cols="50" rows="10"></textarea>
          </div>
          <div>
            <label for="image">
              <strong>Image Url</strong>
            </label>
            <input type="url" name="image" />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
