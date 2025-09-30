import './index.css'
import 'primeicons/primeicons.css';
import { createRoot } from 'react-dom/client'
import { router } from './routes';
import { RouterProvider } from 'react-router';
import { Suspense } from 'react';



createRoot(document.getElementById('root')).render(
  <Suspense fallback={<h1>Loading...</h1>}>
    <RouterProvider router={router} />
  </Suspense>
)
