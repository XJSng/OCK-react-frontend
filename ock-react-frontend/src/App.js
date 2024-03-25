import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContextData from './ProductContext';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ProductListing from './ProductListing';
import AddProductPage from './productsPages/AddProductPage';
import EditProductPage from './productsPages/EditProductPage'
import DeleteProductPage from './productsPages/DeleteProductPage'


export default function App() {
  return (
      <div className='container mt-3'>
        <ProductContextData>
          <Router>
            <nav className="navbar navbar-expand-sm bg-light">
              <div className="container-fluid">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">All Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/add">Add Product</Link>
                  </li>
                </ul>
              </div>

            </nav>
            <Routes>
              <Route path='/' element={<ProductListing />} />
              <Route path='/add' element={<AddProductPage />} />
              <Route path='/edit/:productId' element={<EditProductPage />} />
              <Route path='/delete/:productId' element={<DeleteProductPage/>}/>
            </Routes>
          </Router>
        </ProductContextData>
      </div>
  );
}

