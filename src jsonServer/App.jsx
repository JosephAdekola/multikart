import 'primeicons/primeicons.css'
import { RecoilRoot } from 'recoil'
import './App.css'
import MainRouter from './router/MainRouter'

import { ToastContainer } from 'react-toastify';

function App() {

 

  return (
    <>
      <RecoilRoot>
        <MainRouter />
        <ToastContainer />
      </RecoilRoot>
    </>
  )
}

export default App
