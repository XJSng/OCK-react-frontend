import { useEffect, useState, useContext } from "react";
import ProductListing from "../ProductListing";
import { useLocation } from "react-router-dom";


export default function ProductListingPage() {
    const context = useContext(ProductContext);
    const [showFlash, setShowFlash] = useState(true);
    const location = useLocation(); 

    return <>   
        <h1>All Products</h1>
        <ProductListing/>
    </>
}