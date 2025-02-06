import { createBrowserRouter, 
          createRoutesFromElements, 
          Route, 
          RouterProvider } from 'react-router-dom'

  // LAYOUTS
import MainLayout from '../layouts/MainLayout'


  // PAGES
import HomePage from '../pages/HomePage'

export default function MainRouter() {

    const myRouter = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
              <Route index element={<HomePage />} />
            </Route>
        )
    )

  return (
    <div>

        <RouterProvider router={myRouter} />

    </div>
  )
}
