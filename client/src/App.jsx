import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Tasks from "./pages/tasks/Tasks";
import Error from "./pages/error/Error";
import Login from './pages/login/Login';

const routes = [
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/staffs',
        element: <Users />
      },
      {
        path: '/patients',
        element: <Users />
      },
      {
        path: '/leaves',
        element: <Users />
      },
      {
        path: '/tasks',
        element: <Tasks />
      }
      // {
      //   path: '/products/:productId',
      //   element: <SingleProductPage />
      // }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]

const router = createBrowserRouter(routes);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
