import { createBrowserRouter, 
          createRoutesFromElements, 
          Route, 
          RouterProvider } from 'react-router-dom'

  // LAYOUTS
import MainLayout from '../layouts/MainLayout'


  // PAGES
import HomePage from '../pages/HomePage'
import ProductsDetails from '../pages/ProductsDetails'
import CartPage from '../pages/CartPage'
import { useEffect } from 'react'
import CheckOutPage from '../pages/CheckOutPage'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import { authAtom } from '../atoms/auth/authAtoms'
import Orders from '../pages/Orders'
import Dashboard from '../pages/Dashboard'

export default function MainRouter() {

  const authData = localStorage.getItem("recoil-persist")
  const isLoggedIn = JSON.parse(authData)
  

  useEffect(()=>{

    

  }, [])

    const myRouter = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path=':id' element={ <ProductsDetails /> } />
              <Route path='cart' element={ <CartPage /> } />
              <Route path='checkout' element={<CheckOutPage />} />
              <Route path='login' element={isLoggedIn === null ? <Login /> : <HomePage />} />
              <Route path='signup' element={<SignUp />} />
              <Route path='orders' element={<Orders />} />
              <Route path='dashboard' element={<Dashboard />} />
            </Route>
        )
    )

  return (
    <div>

        <RouterProvider router={myRouter} />

    </div>
  )
}
