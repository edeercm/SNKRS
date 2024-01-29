import React from 'react'
import Header from './Header/cabecera'
import Footer from './Footer/pie'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}

export default Layout