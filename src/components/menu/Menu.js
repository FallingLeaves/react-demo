import React from "react";
import style from './index.module.scss'

const Menu = ({ items }) => {
  return (
    <div className={style['section-center']}>
      {items.map(menuItem => {
        const { id, title, img, desc, price } = menuItem
        return (
          <article key={id} className={style['menu-item']}>
            <img src={img} alt={title} className={style.photo}></img>
            <div className={style['item-info']}>
              <header>
                <h4>{title}</h4>
                <h4 className={style.price}>${price}</h4>
              </header>
              <p className={style['item-text']}>{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu