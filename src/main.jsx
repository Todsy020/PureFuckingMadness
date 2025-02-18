import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import { About } from './About.jsx'
import { Contact } from './Contact.jsx'
import { ErrorPage } from './ErrorPage.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <ErrorPage/>
},
{
  path: '/about',
  element: <About/>
},
{
  path: '/contact',
  element: <Contact/>
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

