import 'primeicons/primeicons.css'
import './App.css'
import MainRouter from './router/MainRouter'

import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { userCartAtom } from './atoms/cart/CartAtoms';
import { utilityFuntions } from './utils/utilityFunctions';


function App() {

  const {fetchUserCart, handleAddCart} =utilityFuntions()
  
  useEffect(()=>{    
    fetchUserCart()
  }, [userCartAtom])

  return (
    <>
      <MainRouter />
        <ToastContainer />
    </>
  )
}

export default App
