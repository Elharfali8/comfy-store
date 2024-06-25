import { HomeLayout, Landing, Error, Products, SingleProduct, Cart, About, Register, Login, Checkout, Orders, } from './pages';

import { ErrorElement } from './components';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// loader
import {loader as landingLoader} from './pages/Landing'
import {loader as singleProductsLoader} from './pages/SingleProduct'
import {loader as productsLoader} from './pages/Products'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: landingLoader
        },
        {
          path: 'products',
          element: <Products />,
          errorElement: <ErrorElement />,
          loader: productsLoader
        },
        {
          path: 'products/:id',
          element: <SingleProduct />,
          errorElement: <ErrorElement />,
          loader: singleProductsLoader
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        { path: 'about', element: <About /> },
        {
          path: 'checkout',
          element: <Checkout />,
        },
        {
          path: 'orders',
          element: <Orders />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: '/register',
      element: <Register />,
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
