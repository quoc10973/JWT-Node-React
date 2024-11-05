import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./style/global.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from './pages/register.jsx';
import UserPage from './pages/user.jsx';
import HomepPage from './pages/home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,  //path mac dinh la cua th father
        element: <HomepPage /> // render cac elenment danh cho Home Page
      },
      {
        path: "/user",
        element: <UserPage />
      },
    ]
  },
  {
    path: "/register",
    element: <RegisterPage />
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
