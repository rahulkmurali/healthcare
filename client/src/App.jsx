import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Users from "./pages/users/Users";
import Tasks from "./pages/tasks/Tasks";

const routes = [
  {
    path: '/',
    element: <Users />
  },
  {
    path: '/tasks',
    element: <Tasks />
  }
]

const router = createBrowserRouter(routes);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
