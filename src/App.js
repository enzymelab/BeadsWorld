
import './App.css';

//rafce is used to create react component
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import AboutUs from './containers/AboutUs/AboutUs';
import BeadsType from './containers/BeadsType/BeadsType';
import Products from './containers/Products/Products';
import Intro from './containers/Intro/Intro';
import Header from './components/Header/Header';
import Footer from './containers/footer/footer';
import Contact from './pages/contact/contact';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<><AboutUs /><Header /><BeadsType /><Products /><Intro /><Footer /></>} />
      </Routes>
    </div>
  )
}

export default App
