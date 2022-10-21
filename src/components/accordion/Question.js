import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import style from './index.module.scss'

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className={style.question}>
      <header>
        <h4>{title}</h4>
        <button className={style.btn} onClick={() => setShowInfo(!showInfo)}>
          {setShowInfo ? <AiOutlineMinus></AiOutlineMinus> : <AiOutlinePlus></AiOutlinePlus>}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Question