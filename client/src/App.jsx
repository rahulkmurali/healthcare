import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Tasks from "./pages/tasks/Tasks";
import Error from "./pages/error/Error";
import Login from './pages/login/Login';
import ProtectedRoute from './routes/ProtectedRoute';

const routes = [
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        )
      },
      {
        path: '/staffs',
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        )
      },
      {
        path: '/patients',
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        )
      },
      {
        path: '/leaves',
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        )
      },
      {
        path: '/tasks',
        element: (
          <ProtectedRoute>
            <Tasks />
          </ProtectedRoute>
        )
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

const router = createBrowserRouter(routes, {
  basename: '/healthcare', 
});

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
