import React, { useState } from "react";
import { useMutation, gql } from "@apollo//client";
import { CreateProduct } from "../Hooks/useProduct";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const CREATE_PRODUCT = gql`
  mutation createProduct($name: String!, $quantityPerUnit: String!) {
    createProduct(record: { name: $name, quantityPerUnit: $quantityPerUnit }) {
      record {
        name
        quantityPerUnit
      }
    }
  }
`;

export default function CreateProductComp() {
  // const [createNewProduct , {loading , data , error }] = CreateProduct();

  const [name, setName] = useState("");
  const [quantityPerUnit, setQuantityPerUnit] = useState();
  const [createNewProduct, { loading, error, data }] =
    useMutation(CREATE_PRODUCT);
  //   const handleClick = async() => {
  //     console.log("handleClick called");
  //    const data =  await createNewProduct();
  //     if(data?.data){
  //         toast.success("Product added successfully")
  //     }
  //   };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name === "" || quantityPerUnit === ""){ return }
  else { const createdData = await createNewProduct({
      variables: { name: name, quantityPerUnit: quantityPerUnit },
    });
    if (createdData?.data) {
      toast.success("Product added successfully");
    }}
  };
  return (
    <div>
      {}
      {/* <button onClick={() => handleClick()}>Add</button> */}

      <form
        class="pure-form pure-form-stacked"
        onSubmit={(e) => handleSubmit(e)}
      >
        <center>
          <fieldset>
            <legend> Create Product Form</legend>
            <label for="stacked-email">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
            <span class="pure-form-message">This is a required field.</span>
            <label for="stacked-password">quantity Per Unit</label>
            <input
              onChange={(e) => setQuantityPerUnit(e.target.value)}
              type="number"
              placeholder="quantity Per Unit"
            />
            <button type="submit" class="pure-button pure-button-primary" disabled={!name && !quantityPerUnit ? true : false }>
              Add
            </button>
            <button type="submit" class="pure-button pure-button-primary" style={{marginLeft:"8px"}} >
             <Link style={{color:'white'}} to="/product">Cancel </Link> 
            </button>
          </fieldset>
        </center>
      </form>
    </div>
  );
}
