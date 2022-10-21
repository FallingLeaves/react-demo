import React from "react";
import Tour from './Tour'
import style from './index.module.scss'

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className={style.title}>
        <h2>out tours</h2>
        <div className={style.underline}></div>
      </div>
      <div>
        {tours.map(tour => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
        })}
      </div>
    </section>
  )
}

export default Tours