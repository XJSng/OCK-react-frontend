import {useState} from "react"

export default function ProductForm(props) {
const [formState, setFormState] = useState({
    "name": "",
    "cost": 0,
    "description": "",
    "category_id": 0,
    "brand_id": [],
    "image_url": ""
});

const [errors, setErrors] = useState ({
    "name": "",
    "cost": "",
    "description": "",
    "category_id": "",
    "brand_id": "",
    "image_url": ""

})

const handleFormField = (event)=>{
    setFormState({
        ...formState,
        [event.target.name]:event.target.value
    })
}
const submitForm = (event)=>{
    const newErrors = {
        "name": "",
    "cost": "",
    "description": "",
    "category_id": "",
    "brand_id": "",
    "image_url": ""
    }

    // Add validation here

}

return <>
<div>
<label>Product Name:</label>
<input type="text"
name="name"
value={formState.name}
className="form-control"
onChange={handleFormField}
/>
</div>
<div>
<label>Product Cost:</label>
<input type="text"
name="cost"
value={formState.cost}
className="form-control"
onChange={handleFormField}
/>
</div>
<div>
<label>Description:</label>
<input type="text"
name="description"
value={formState.description}
className="form-control"
onChange={handleFormField}
/>
</div>
<div>
<label>Category:</label>
<input type="text"
name="category_id"
value={formState.category_id}
className="form-control"
onChange={handleFormField}
/>
</div>
<div>
<label>Tags:</label>
<input type="text"
name="brand_id"
value={formState.brand_id}
className="form-control"
onChange={handleFormField}
/>
</div>
<button className="btn btn-primary mt-3"
                onClick={submitForm}
        >{props.label ?? "Submit"}</button>
</>

}