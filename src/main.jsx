import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { routes } from './router/route.js'
import Home from './pages/home/Home.jsx'
<style>
@import url('https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap');
</style>

const Loading = () => {
  return (
    <div>
      Loading...
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Suspense fallback={<Loading/>}>
    <RouterProvider router={routes}/>
   </Suspense>
  </StrictMode>,
)
