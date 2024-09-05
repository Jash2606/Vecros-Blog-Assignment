import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { CreateBlog, BlogsList, BlogView } from './pages/index.js'
import { Layout} from './components/index.js'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<BlogsList />} />
//       <Route path="/create-blog" element={<CreateBlog />} />
//       <Route path="/blog-view/:id" element={<BlogView />} />
//     </Route>
//   )
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<CreateBlog />} />
      <Route path="/blogs" element={<BlogsList />} />
      <Route path="/blog-view/:id" element={<BlogView />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
