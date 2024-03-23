import { useState, createContext, useEffect } from "react";
import axios from "axios";
export const ProductContext = createContext()

const URL = "https://express-product-api.onrender.com/api"

export default function ProductContextData(props){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const loadData = async ()=> {
            const response = await axios.get(URL + "/products");
            setProducts(response.data.products)
        }
        loadData();
    }, [])

    const context = {
        getProducts: () => products,

        async addProduct(newProduct) {
            const response = await axios.post(URL + "/products", {
                ...newReview
            })
        }
    }


return <ProductContext.Provider value={context}>
    {props.children}
</ProductContext.Provider>
}