import { useEffect, useState, useContext } from "react";
import ProductListing from "../ProductListing";
import { useLocation } from "react-router-dom";


export default function ProductListingPage() {
    const context = useContext(ProductContext);
    const [showFlash, setShowFlash] = useState(true);
    const location = useLocation(); 

    useEffect(()=>{
        if (location.state?.message) {
            setTimeout(()=>{
                setShowFlash(false);
            }, 5000)
        }
    }, [])

    return <>
        {
            location.state?.message && showFlash && <div className="alert alert-success">
                {location.state.message}
            </div>
        }
        <h1>All Products</h1>
        <ProductListing/>
    </>
}