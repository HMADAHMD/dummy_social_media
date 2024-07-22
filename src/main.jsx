import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreatePost from './components/CreatePost.jsx';
import Posts, { postLoader } from './components/Posts.jsx';

const router = createBrowserRouter([
  {path: '/', element: <App/>, children: [
    { path: '/', element: <Posts/>, loader: postLoader },
    { path: '/create-post', element: <CreatePost/>}
  ]},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
