import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./style/global.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from './pages/register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    // children: [
    //   {
    //     path: "register",
    //     element: <RegisterPage />
    //   }
    // ]
  },
  {
    path: "/register",
    element: <RegisterPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
