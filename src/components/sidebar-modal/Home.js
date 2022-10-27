import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import style from './index.module.scss'

const Home = () => {
  const { openModal, openSlidebar } = useGlobalContext()
  return (
    <main className={style.main}>
      <button onClick={openSlidebar} className={style['sidebar-toggle']}>
        <FaBars></FaBars>
      </button>
      <button className={style.btn} onClick={openModal}>
        show modal
      </button>
    </main>
  )
}

export default Home