import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { ProductContext } from "../ProductContext";
import ProductForm from "../productsPages/ProductForm";

export default  function EditProductPage() {
    
    const params = useParams();
    const navigate = useNavigate();
    const productId = params.productId;

    const context = useContext(ProductContext);
    const productToEdit = context.getProductById(productId);

    return <>
        <h1>Editing Product: {productToEdit?.name}</h1>
        <ProductForm initialValue={productToEdit}
                    label="Edit Product"
                    onSubmit={(product)=>{
                        console.log(product, productId)
                        context.editProduct(productId, product)
                        navigate('/')
                     }}
        />
    </>
}