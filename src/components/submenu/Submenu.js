import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import style from './index.module.scss'

const Submenu = () => {
  const { isSubmenuOpen, page: { page, links }, location } = useGlobalContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [page, location, links])

  return (
    <aside ref={container} className={`${isSubmenuOpen ? style.submenu + ' ' + style.show : style.submenu}`}>
      <section>
        <h4>{page}</h4>
        <div className={`${style['submenu-center'] + ' ' + style[columns]}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link
            return (
              <a key={index} href={url}>{icon}{label}</a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu