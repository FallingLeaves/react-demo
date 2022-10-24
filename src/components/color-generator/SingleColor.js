import React, { useState, useEffect } from "react";
import { rgbToHex } from "utils"
import style from './index.module.scss'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000);
    return () => clearTimeout(timeout)
  }, [alert])
  return (
    <article
      className={`${style.color} ${index > 10 && style['color-light']}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => { setAlert(true); navigator.clipboard.writeText(hexValue) }}
    >
      <p className={style['percent-value']}>{weight}%</p>
      <p className={style['color-value']}>{hexValue}</p>
      {alert && <p className={style.alert}>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor