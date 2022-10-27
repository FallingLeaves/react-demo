import React from 'react';
import { useGlobalContext, CartProvider } from "./context";
import style from './index.module.scss'

import Navbar from './Navbar';
import CartContainer from './CartContainer';

function CartApp() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className={style.loading}>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  )
}

function App() {
  return (
    <CartProvider>
      <CartApp></CartApp>
    </CartProvider>
  )
}

export default App