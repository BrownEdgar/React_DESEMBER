import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Post from './components/Post/Post.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><h1>Welcome</h1> <button>Go to posts</button></div>,
  },
  {
    path: "/posts",
    element: <App />,
  },
  {
    path: "/posts/:id",
    element: <Post />,
  }
]);
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
