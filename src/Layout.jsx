import { Outlet } from 'react-router-dom';

import React from 'react'
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';


export default function Layout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}
