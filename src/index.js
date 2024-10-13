import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './responsive.css';
import './darkmode.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import Default from './components/Default';
import Orderlist from './components/Orderlist';
import Reports from './components/Reports';
import Overview from './components/Overview';
import Details from './components/Details';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
  }, 

  {
    path: "/dashboard",
    element: <Dashboard/>,
    children: [
      {
        index: true,
        element: <Default/>
      },
      {
        path: "orderlist",
        element: <Orderlist/>
      },
      {
        path: "details",
        element: <Details/>
      },
      {
        path: "overview",
        element: <Overview/>
      },
      {
        path: "reports",
        element: <Reports/>
      },
      
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
