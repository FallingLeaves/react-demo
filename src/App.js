import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.scss"
import BirthdayReminder from "./components/birthday-reminder";
import Tours from './components/tours'
import Reviews from './components/reviews'
import Accordion from './components/accordion'
import Menu from './components/menu'
import Tabs from './components/tabs'
import Slider from './components/slider'
import Lorem from './components/lorem-ipsum'
import ColorGenerator from './components/color-generator'
import Grocery from './components/grocery-bud'
import Navbar from "./components/navbar";
import SidebarApp from "./components/sidebar-modal";
import SubmenuApp from "./components/submenu";
import CartApp from "./components/cart";

// import { ComponentApp } from "./components";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

// const components = []

// Object.entries(ComponentApp).forEach(([url, component]) => {
//   components.push({
//     url,
//     component
//   })
// })

// components.unshift({
//   url: '/',
//   component: Home
// })

// console.log(components);


class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/birthday">Birthday reminder</Link>
        <Link to="/tours">Tours</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/accordion">Accordion</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/tabs">Tabs</Link>
        <Link to="/slider">Slider</Link>
        <Link to="/lorem">Lorem</Link>
        <Link to="/color">Color Generator</Link>
        <Link to="/grocery">Grocery</Link>
        <Link to="/navbar">Navbar</Link>
        <Link to="/sidebar">Sidebar modal</Link>
        <Link to="/submenu">Submenu</Link>
        <Link to="/cart">Cart</Link>
        <hr></hr>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/birthday" element={<BirthdayReminder />}></Route>
          <Route path="/tours" element={<Tours />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/accordion" element={<Accordion />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/tabs" element={<Tabs />}></Route>
          <Route path="/slider" element={<Slider />}></Route>
          <Route path="/lorem" element={<Lorem />}></Route>
          <Route path="/color" element={<ColorGenerator />}></Route>
          <Route path="/grocery" element={<Grocery />}></Route>
          <Route path="/navbar" element={<Navbar />}></Route>
          <Route path="/sidebar" element={<SidebarApp />}></Route>
          <Route path="/submenu" element={<SubmenuApp />}></Route>
          <Route path="/cart" element={<CartApp />}></Route>
        </Routes>
      </div>
    )
  }
}

export default App