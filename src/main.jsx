import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './view/home'
import Apis from './view/aboutApi'
import Users from './view/users'
import Post from './view/Post'

const myConfigureRoute = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/aboutApi',
    element: <Apis />
  },
  {
    path: '/users',
    element: <Users />
  },
  {
    path: '/post/:id',
    element: <Post />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={myConfigureRoute}/>
  </React.StrictMode>,
)
