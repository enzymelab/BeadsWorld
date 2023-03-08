
import './App.css';

//rafce is used to create react component
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import AboutUs from './containers/AboutUs/AboutUs';
import BeadsType from './containers/BeadsType/BeadsType';
import Products from './containers/Products/Products';
import Intro from './containers/Intro/Intro';
import FindUS from './containers/FindUs/FindUS';
import Header from './components/Header/Header';
import Footer from './containers/footer/footer';

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Header />
        <AboutUs />
        <BeadsType />
        <Products />
        <Intro />
        <FindUS />
        <Footer />
      </div>

    </div>
  )
}

export default App
