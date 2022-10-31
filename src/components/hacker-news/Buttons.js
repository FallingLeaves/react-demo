import React from 'react';
import { useGlobalContext } from './context'
import style from './index.module.scss'

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext()

  return (
    <div className={style['btn-container']}>
      <button disabled={isLoading} onClick={() => handlePage('dec')}>
        prev
      </button>
      <p>{page + 1} of {nbPages}</p>
      <button disabled={isLoading} onClick={() => handlePage('inc')}>
        next
      </button>
    </div>
  )
}

export default Buttons