import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import AddToy from './pages/AddToy/AddToy';
import AllToys from './pages/AllToys/AllToys';
import MyToys from './pages/MyToys/MyToys';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './provider/AuthProvider';
import CarDetails from './pages/CarDetails/CarDetails';
import PrivateRoute from './Routes/PrivateRoute';
import NotFound from './NotFound/NotFound';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: ":id",
        element:<CarDetails></CarDetails>,
        loader:({params})=>fetch(`https://toy-server-zeta.vercel.app/cardata/${params.id}`)
      },
      {
        path: "/blog",
        element:<Blog></Blog>
      },
      {
        path: "/alltoys",
        element:<AllToys></AllToys>
      },
      {
        path: "/mytoys",
        element:<PrivateRoute>
          <MyToys></MyToys>
        </PrivateRoute>
      },
      {
        path: "/addtoy",
        element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element:<Register></Register>
      }

    ]

  },
  {
    path: "*",
    element:<NotFound></NotFound>
  }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
