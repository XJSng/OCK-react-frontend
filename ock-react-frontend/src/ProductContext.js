import { useState, createContext, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
export const ProductContext = createContext()

const URL = "https://express-product-api.onrender.com/api"

export default function ProductContextData(props){
    // const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [categories,setCategories] = useState([])
    const [tags,setTags] = useState([])
    useEffect(()=>{
        const loadData = async ()=> {
            const productResponse = await axios.get(URL + "/products");
            setProducts(productResponse.data.products)

            const categoryResponse = await axios.get(URL + "/categories")
            setCategories(categoryResponse.data.categories)

            const tagsResponse = await axios.get(URL + "/tags")
            setTags(tagsResponse.data.tags)
        }
        loadData();
    }, [])

    const context = {
        getProducts: ()=> products,
        getCategories: ()=>categories,
        getTags: ()=>tags,

        async addProduct(newProduct) {
            const response = await axios.post(URL + "/products", {
                ...newProduct,
                cost: parseInt(newProduct.cost),
                category_id: parseInt(newProduct.category_id),
                tags: parseInt(newProduct.tags)
            })
            newProduct.id = response.data.product.id

            console.log(response.data)
            setProducts([...products,newProduct])
        },

       getProductById(productId) {
            return products.find( p=>p.id === parseInt(productId))
        },

        async editProduct(productId, newProduct) {
            const response = await axios.put(URL + "/products/" + productId, {
                ...newProduct,
                cost: parseInt(newProduct.cost),
                category_id: parseInt(newProduct.category_id),
                tags: parseInt(newProduct.tags)
            })

            newProduct.id = productId
            const index = products.findIndex( p=> p.id === parseInt(productId))
            const left = [...products.slice(0, index)]
            const right = [...products.slice(index+1)];
            const modified  =[ ...left, newProduct, ...right];
   
            setProducts(modified);
        },
        async deleteProduct(productId){
            if (products.find( p=>p.id === parseInt(productId))) {
            await axios.delete(URL + "/products/" + productId)
            const indexToDelete = products.findIndex( p=> p.id === parseInt(productId))
            const modified = [...products.slice(0, indexToDelete), ...products.slice(indexToDelete+1)];
            setProducts(modified);
        } else {
           console.log(products)

        }
        }


    }

// The get context is stored in the value
return <ProductContext.Provider value={context}>
    {props.children}
</ProductContext.Provider>
}