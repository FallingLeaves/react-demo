import React, { useState } from "react";
import Menu from './Menu'
import Categories from './Categories'
import items from './data'
import style from './index.module.scss'
import { setRouterUrl } from "utils";
const allCategories = ['all', ...new Set(items.map(v => v.category))]

function MenuApp() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = category => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter(v => v.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className={`${style.menu} ${style.section}`}>
        <div className={style.title}>
          <h2>our menu</h2>
          <div className={style.underline}></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  )
}

setRouterUrl(MenuApp, '/menu')

export default MenuApp