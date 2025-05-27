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
import { AllCart } from '../apiCalls/CartCall'
import { useEffect } from 'react'
import { cartAtoms, fetchCart } from '../atoms/cart/CartAtoms'
import { useRecoilState, useSetRecoilState } from 'recoil'

export default function MainRouter() {

  const setAllCartItems = useSetRecoilState(cartAtoms)

  useEffect(()=>{

    fetchCart(setAllCartItems);

    // const fetchAllCartItems = async() =>{
    //   try {
    //     const res = await AllCart()
    //   setAllCartItems(res.data)
    //   } catch (error) {
    //     console.error("couldn't get cart items from call", error);
        
    //   }
    // }

    // fetchAllCartItems()

  }, [])

    const myRouter = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path=':id' element={ <ProductsDetails /> } />
              <Route path='cart' element={ <CartPage /> } />
            </Route>
        )
    )

  return (
    <div>

        <RouterProvider router={myRouter} />

    </div>
  )
}
