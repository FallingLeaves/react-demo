import React from 'react';
import style from './index.module.scss'

const Loading = () => {
  return (
    <div className={style.main}>
      <div className={style.loading}></div>
    </div>
  )
}

export default Loading