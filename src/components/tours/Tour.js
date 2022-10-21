import React, { useState } from "react";
import style from './index.module.scss'

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className={style['single-tour']}>
      <img src={image} alt={name}></img>
      <footer>
        <div className={style['tour-info']}>
          <h4>{name}</h4>
          <h4 className={style['tour-price']}>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : ' read more'}</button>
        </p>
        <button onClick={() => removeTour(id)} className={style['delete-btn']}>not interested</button>
      </footer>
    </article>
  )
}

export default Tour