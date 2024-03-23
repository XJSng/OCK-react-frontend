import { useContext } from "react"
import { ProductContext } from "./ProductContext"
import { useNavigate } from "react-router-dom"

export default function ProductListing() {
    const context = useContext(ProductContext);
    const navigate = useNavigate();
    return <ul className="list-group">
        {
            context.getProducts().map(p =>
                <li key={p._id} className="list-group-item">
                    <h2>{p.name}</h2>
            <div>
                {p.description}
            </div>
            <div>
                {p.cost}
                    </div>

                    <button className="btn btn-primary mt-3"
                        onClick={() => {
                            navigate("/edit/" + p._id);
                        }}

                    >Edit</button>
                </li>)
        }

    </ul>
}