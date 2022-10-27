import React from "react";
import { useGlobalContext } from './context'
import { FaTimes } from "react-icons/fa";
import sublinks from './data'
import style from './index.module.scss'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <div className={`${isSidebarOpen ? style['sidebar-wrapper'] + ' ' + style.show : style['sidebar-wrapper']}`}>
      <aside className={style.sidebar}>
        <button className={style['close-btn']} onClick={closeSidebar}>
          <FaTimes></FaTimes>
        </button>
        <div className={style['sidebar-links']}>
          {sublinks.map((item, index) => {
            const { links, page } = item
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className={style['sidebar-sublinks']}>
                  {links.map((link, index) => {
                    const { url, icon, label } = link
                    return (
                      <a key={index} href={url}>{icon}{label}</a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar