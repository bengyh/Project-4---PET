import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import './index.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import axios from 'axios';

//prevent creation of any url in localhost 4000 which is the same as backend host
axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '/';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="product/:slug" element={<ProductPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
