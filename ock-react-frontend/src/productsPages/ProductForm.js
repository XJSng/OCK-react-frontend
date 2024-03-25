import { useContext, useState } from 'react'
import { ProductContext } from '../ProductContext'

export default function ProductForm (props) {
  const context = useContext(ProductContext)
  const [formState, setFormState] = useState({
    name: props.initialValue?.name ?? '',
    cost: props.initialValue?.cost ?? 0,
    description: props.initialValue?.description ?? '',
    category_id: props.initialValue?.category_id ?? 1,
    tags: props.initialValue?.tags ??[],
    "image_url": props.initialValue?.image_url ?? ''
  })

  // console.log(formState);

  const [errors, setErrors] = useState({
    name: '',
    cost: '',
    description: '',
    category_id: '',
    tags: '',
    "image_url": ''
  })

  // Two way binding
  const handleFormField = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = (event) => {
    const newErrors = {
      name: '',
      cost: '',
      description: '',
      category_id: '',
      tags: '',
      "image_url": ''
    }
    props.onSubmit(formState);

    // Add validation here
  }

  return (
    <>
      <div>
        <label>Product Name:</label>
        <input
          type='text'
          name='name'
          value={formState.name}
          className='form-control'
          onChange={handleFormField}
        />
      </div>
      <div>
        <label>Product Cost (in cents):</label>
        <input
          type='text'
          name='cost'
          value={formState.cost}
          className='form-control'
          onChange={handleFormField}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type='text'
          name='description'
          value={formState.description}
          className='form-control'
          onChange={handleFormField}
        />
      </div>
      <div>
        <label htmlFor='category'>Category:</label>
        <select
          id='categoryId'
          name='category_id'
          value={formState.category_id}
          onChange={handleFormField}
          className='form-control'
          required
        >
          {context.getCategories().map(c => (
            <option key={c._id} value={c._id} name='category_id'>
              {c.name}
            </option>
          ))}
        </select>
      </div>
        <div>
        <label htmlFor='tags'>Tags:</label>
        <select
          id='tags'
          name='tags'
          value={formState.tags}
          onChange={handleFormField}
          className='form-control'
          multiple={true}
        >
          {context.getTags().map(t => (
            <option key={t._id} value={t._id}>
              {t.name}
            </option>
          ))}
        </select>
     
      </div>    
      <button className='btn btn-primary mt-3' onClick={submitForm}>
        {props.label ?? 'Submit'}
      </button>
    </>
  )
}
