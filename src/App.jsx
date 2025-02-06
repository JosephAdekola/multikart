import 'primeicons/primeicons.css'
import { RecoilRoot } from 'recoil'
import './App.css'
import MainRouter from './router/MainRouter'

function App() {

  return (
    <>
      <RecoilRoot>
        <MainRouter />
      </RecoilRoot>
    </>
  )
}

export default App
