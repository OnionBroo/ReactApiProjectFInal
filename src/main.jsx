import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './view/home'
import Apis from './view/aboutApi'
import Users from './view/users'
import Post from './view/Post'
import Error from './view/Error'


const myConfigureRoute = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error/>
  },
  {
    path: '/aboutApi',
    element: <Apis />,
    errorElement: <Error/>
  },
  {
    path: '/users',
    element: <Users />,
    errorElement: <Error/>
  },
  {
    path: '/post/:id/:width/:height',
    element: <Post />,
    errorElement: <Error/>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={myConfigureRoute}/>
  </React.StrictMode>,
)
