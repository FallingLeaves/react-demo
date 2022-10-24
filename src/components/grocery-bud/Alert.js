import React, { useEffect } from 'react'
import style from './index.module.scss'

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000);
    return () => clearTimeout(timeout)
  }, [list])

  return (
    <p className={`${style.alert} ${style['alert-' + type]}`}>{msg}</p>
  )
}

export default Alert