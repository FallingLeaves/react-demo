import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";
import style from './index.module.scss'

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section className={style.cart}>
        <header>
          <h2>your bag</h2>
          <h4 className={style['empty-cart']}>is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className={style.cart}>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {
          cart.map(item => {
            return <CartItem key={item.id} {...item}></CartItem>
          })
        }
      </div>
      <footer>
        <hr></hr>
        <div className={style['cart-total']}>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className={`${style.btn} + ' ' + ${style['clear-btn']}`} onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer