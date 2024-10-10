import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Service from './components/Service/Service';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>

      },
      {
        path:'/product',
        element:<Product></Product>
      },
      {
        path:'/about',
        element:<About></About>,
      } ,
      {
        path:'/service',
        element:<Service></Service>,
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
