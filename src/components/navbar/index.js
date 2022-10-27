import React, { useState, useRef, useEffect } from "react";
import { FaBars } from 'react-icons/fa'
import { links, social } from "./data";
import style from './index.module.scss'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  return (
    <nav className={style.nav}>
      <div className={style['nav-header']}>
        <img src={logo} className={style.logo} alt="log0"></img>
        <button className={style['nav-toggle']} onClick={toggleLinks}>
          <FaBars></FaBars>
        </button>
      </div>
      <div className={style['links-container']} ref={linksContainerRef}>
        <ul className={style.links} ref={linksRef}>
          {links.map(link => {
            const { id, url, text } = link
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            )
          })}
        </ul>
      </div>
      <ul className={style['social-icons']}>
        {social.map(socialIcon => {
          const { id, url, icon } = socialIcon
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar