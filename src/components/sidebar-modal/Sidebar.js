import React from "react";
import logo from './logo.svg'
import { useGlobalContext } from './context'
import { FaTimes } from "react-icons/fa";
import { social, links } from './data'
import style from './index.module.scss'

const Sidebar = () => {
  const { isSlidebarOpen, closeSlidebar } = useGlobalContext()

  return (
    <aside className={`${isSlidebarOpen ? style.sidebar + ' ' + style['show-sidebar'] : style.sidebar}`}>
      <div className={style['sidebar-header']}>
        <img src={logo} className={style.logo} alt="coding addict"></img>
        <button className={style['close-btn']} onClick={closeSlidebar}>
          <FaTimes></FaTimes>
        </button>
      </div>
      <ul className={style.links}>
        {links.map(link => {
          const { id, url, text, icon } = link
          return (
            <li key={id}>
              <a href={url}>{icon}{text}</a>
            </li>
          )
        })}
      </ul>
      <ul className={style['social-icons']}>
        {social.map(link => {
          const { id, url, icon } = link
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar