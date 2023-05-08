import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import Admin from './pages/adminPages/Admin';
import SharedLayout from './pages/webshopPages/SharedLayout'
import Home from './pages/webshopPages/Home'
import About from './pages/webshopPages/About'
import Products from './pages/webshopPages/Products'
import SingleProduct from './pages/webshopPages/SingleProducts'
import ErrorPage from './pages/webshopPages/ErrorPage'
import ProductListAdmin from './pages/adminPages/ProductListAdmin';
import FilterProductAdmin from './pages/adminPages/FilterProdcuctAdmin';
import FilterByPriceAdmin from './pages/adminPages/FilterByPriceAdmin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/:id',
        element: <SingleProduct/>
      },
      {
        path: '*',
        element: <ErrorPage/>
      },
    ]
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path:'admin/list',
    element: <ProductListAdmin />
  },
  {
    path: 'admin/filter',
    element: <FilterProductAdmin />
  },
  {
    path: 'admin/filter-price',
    element: <FilterByPriceAdmin />
  }

])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
