import "./addproduct.css";
import "./App.css";
import React from "react";
import Button from "@material-ui/core/Button";
import swal from 'sweetalert';



export default function AddProduct(props) {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const id = e.target[0].value;
    const title = e.target[1].value;
    const price = e.target[2].value;
    const category = e.target[3].value;
    const description = e.target[4].value;
    const image = e.target[5].value;
    const quantity = 1;

    await fetch(
      "https://ecommerce-app-e0059-default-rtdb.firebaseio.com/use.json",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          title,
          price,
          category,
          description,
          image,
          quantity,
        }),
      }
    );

    swal("Good job!", "You added a product", "success");
  };


  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="input-format">
          <label for="id">
            <strong>Id</strong>
          </label>
          <input type="number" name="id" />

          <label for="title">
            <strong>Title</strong>
          </label>
          <input type="text" name="title" />

          <label for="price">
            <strong>Price</strong>
          </label>
          <input type="number" name="price" />

          <label for="category">
            <strong>Category</strong>
          </label>
          <input type="text" name="category" />

          <label for="description">
            <strong>Description</strong>
          </label>
          <textarea name="description" cols="50" rows="10"></textarea>

          <label for="image">
            <strong>Image Url</strong>
          </label>
          <input type="url" name="image" />

          <Button
            className="button"
            type="submit"
            variant="contained"
            color="primary"
         
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
