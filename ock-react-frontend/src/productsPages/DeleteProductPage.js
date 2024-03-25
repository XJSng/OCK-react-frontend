import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { ProductContext } from "../ProductContext";

export default function DeleteProductPage() {
    const params = useParams();
    const navigate = useNavigate();
    const productId = params.productId;

    const context = useContext(ProductContext);
    const productToEdit = context.getProductById(productId);

    return <>
        <h1>Deleting Product: {productToEdit?.name}</h1>
        <button className='btn btn-primary mt-3' onClick={()=>navigate("/")}>
        No
      </button>
        <button className='btn btn-danger mt-3 ms-3' onClick={ async () => {await context.deleteProduct(productId)
        navigate(-1)
        }}>
        Yes
      </button>
    </>
}