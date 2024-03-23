import React, { useContext } from "react";
import { ProductContext } from "../ProductContext";
import { useNavigate } from "react-router-dom";
import ProductForm from "./ProductForm";

export default function AddNewProject(){
  const context = useContext(ProductContext)
  const navigate = useNavigate() 
  
  return (
     <>
       <h1>Add A New Old Chang Kee Product</h1>
       <ProductForm
       label="Add Product"
       onSubmit={(product)=>{
        context.addProduct(product);
        navigate('/', {
          'state': {
            'message': 'New product has been added'
          }
        })
       }}
       />
     </>
   );
 }