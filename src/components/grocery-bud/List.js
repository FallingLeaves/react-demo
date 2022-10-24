import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa'
import style from './index.module.scss'

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className={style['grocery-list']}>
      {items.map(item => {
        const { id, title } = item
        return (
          <article className={style['grocery-item']} key={id}>
            <p className={style.title}>{title}</p>
            <div className={style['btn-container']}>
              <button type="button" className={style['edit-btn']} onClick={() => editItem(id)}>
                <FaEdit></FaEdit>
              </button>
              <button type="button" className={style['delete-btn']} onClick={() => removeItem(id)}>
                <FaTrash></FaTrash>
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List