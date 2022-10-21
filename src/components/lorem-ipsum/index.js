import React, { useState } from "react";
import data from './data'
import style from './index.module.scss'
import { setRouterUrl } from "utils";

function LoremApp() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1
    }
    if (count > 8) {
      amount = 8
    }
    setText(data.slice(0, amount))
  }

  return (
    <section className={style['section-center']}>
      <h3>tired of borng lorem ipsum?</h3>
      <form className={style['lorem-form']} onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name="amount" id="amount" value={count} onChange={e => setCount(e.target.value)}></input>
        <button className={style.btn}>generate</button>
      </form>
      <article className={style['lorem-text']}>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

setRouterUrl(LoremApp, '/lorem')

export default LoremApp