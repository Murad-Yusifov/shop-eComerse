import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router'
import Footer from './Footer'
import Contact from './Contact'
import TextAndBanner from './TextAndBanner'

const Layout = () => {
  const location = useLocation()

  const [search, setSearch]=useState(false);


  return (
    <>
    {/* eger home page-dedir se, o zaman contact info gosterilsin */}
    {location.pathname==="/" && <Contact/>}
        <Navbar setSearch={setSearch}/>
        <TextAndBanner search={search} setSearch={setSearch}/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout