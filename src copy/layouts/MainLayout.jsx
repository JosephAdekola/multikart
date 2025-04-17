import React from 'react'
import { Outlet } from 'react-router-dom'
import PreHeader from '../components/PreHeader'
import Footer from '../components/Footer'
import Header from '../components/Header'

function MainLayout() {
  return (
    <>
        <nav><PreHeader /></nav>
        <nav className=' sticky top-0 z-20 '>
            <Header />
        </nav>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  )
}

export default MainLayout