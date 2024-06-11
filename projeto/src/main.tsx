import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Blog } from './pages/blog/Blog.tsx'
import { Home } from './pages/home/Home.tsx'

import "react-toastify/dist/ReactToastify.css";
import "./style/index.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  }, {
    path: '/blog',
    element: <Blog />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
