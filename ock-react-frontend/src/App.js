import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContentData from './ProductContextData';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ProductListingPage from './products/ProductListingPage';
import AddProductPage from './products/AddProductPage';
import EditProductPage from './products/EditProductPage'


function App() {
  return (
    <>
      <div className='container mt-3'>
        <ProductContentData>
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
              <Route path='/' element={<ProductListingPage />} />
              <Route path='/add' element={<AddProductPage />} />
              <Route path='/edit/:productId' element={<EditProductPage />} />
            </Routes>
          </Router>
        </ProductContentData>
      </div>
    </>
  );
}

export default App;
