import React from 'react'
import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router'
import Footer from './Footer'
import Contact from './Contact'

const Layout = () => {
  const location = useLocation()

  return (
    <>
    {/* eger home page-dedir se, o zaman contact info gosterilsin */}
    {location.pathname==="/" && <Contact/>}
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout