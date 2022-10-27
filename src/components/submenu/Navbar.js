import React from "react";
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from "./context";
import style from './index.module.scss'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
  const displaySubmenu = e => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, { center, bottom })
  }

  const handleSubmenu = e => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }

  return (
    <nav className={style.nva} onMouseOver={handleSubmenu}>
      <div className={style['nav-center']}>
        <div className={style['nav-header']}>
          <img src={logo} alt="" className={style['nav-logo']}></img>
          <button className={`${style.btn} ${style['toggle-btn']}`} onClick={openSidebar}>
            <FaBars></FaBars>
          </button>
        </div>
        <ul className={style['nav-links']}>
          <li>
            <button className={style['link-btn']} onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className={style['link-btn']} onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className={style['link-btn']} onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar