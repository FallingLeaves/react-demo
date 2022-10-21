import React from "react";
import style from './index.module.scss'

const Categories = ({ categories, filterItems }) => {
  return (
    <div className={style['btn-container']}>
      {categories.map((category, index) => {
        return (
          <button type="button" className={style['filter-btn']} key={index} onClick={() => filterItems(category)}>
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories