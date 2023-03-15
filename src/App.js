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
import Signin from './pages/signin/signin';
import NewFooter from './components/footer/footer';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import { ShopContextProvider } from './context/shopcontext';
const App = () => {
  return (
    <div className='app'>
      <ShopContextProvider>


        <Navbar />
        <Header />
        <Routes>
          <Route path='/contact' element={<Contact />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<><AboutUs /><BeadsType /><Products /><Intro /><Footer /></>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
        <NewFooter />


      </ShopContextProvider>
    </div>
  )
}

export default App;
