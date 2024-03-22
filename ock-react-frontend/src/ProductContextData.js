import { useState, createContext, useEffect } from "react";
import axios from "axios";
export const ProductContext = createContext()

const URL = "https://express-product-api.onrender.com/api"

export default function ProductContentData(props){
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const loadData = async ()=> {
            const response = await axios.get(URL + "/products")
            setProducts(response.data)
        }
        loadData()
    }, [])

    const context = {
        getProducts:() => {
            // todo: set a timer like every 10 minutes fetch all new reviews
            return products
        }

   

}
return <ProductContext.Provider value={context}>
{props.children}
</ProductContext.Provider>
}