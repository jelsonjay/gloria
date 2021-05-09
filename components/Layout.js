import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer'
import Hearder from '../components/Hearder/index';

export const Layout = ({children}) => {
//const hero = './images/hero-4.jpeg';
  return (
    <div>
    <Navbar />
    {children}
    <Footer />
    </div>
  )
}
