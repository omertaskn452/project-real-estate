import Layout from "./components/layout/Layout"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home"
import Search from "./pages/search/Search"

function App() {
  
  const router = createBrowserRouter ([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/search',
          element: <Search/>
        }
      ]
    }
  ])

  return (
      <RouterProvider router={router}/>
  )
}

export default App
