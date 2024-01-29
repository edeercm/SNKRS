import React from 'react'
import Header from '../components/Header/header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}

export default Layout