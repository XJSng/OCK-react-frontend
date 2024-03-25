import { useContext } from 'react'
import { ProductContext } from './ProductContext'
import { useNavigate } from 'react-router-dom'

export default function ProductListing () {
  const context = useContext(ProductContext)
  const navigate = useNavigate()
  return (
    <ul className='list-group'>
      {context.getProducts().map(p => (
        <li key={p.id} className='list-group-item'>
          <h2>#{p.id} {p.name}</h2>
          <div>{p.description}</div>
          <div>{p.cost}</div>

          <button
            className='btn btn-primary mt-3'
            onClick={() => {
              navigate('/edit/' + p.id)
            }}
          >
            Edit
          </button>
          <button
            className='btn btn-danger mt-3 ms-2'
            onClick={() => {
              navigate('/delete/' + p.id)
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}
