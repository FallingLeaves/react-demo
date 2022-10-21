import React, { useSate, useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import { setRouterUrl } from "utils";
import style from './index.module.scss'
import data from './data'

function SliderApp() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000);
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className={style.section}>
      <div className={style.title}>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className={style['section-center']}>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person
          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide'
          }

          return (
            <div className={`${style[position]} ${style.article}`} key={id}>
              <img src={image} alt={name} className={style['person-img']}></img>
              <h4>{name}</h4>
              <p className={style.title}>{title}</p>
              <p className={style.text}>{quote}</p>
              <FaQuoteRight className={style.icon}></FaQuoteRight>
            </div>
          )
        })}
        <button className={style.prev} onClick={() => setIndex(index - 1)}>
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button className={style.next} onClick={() => setIndex(index + 1)}>
          <FiChevronRight></FiChevronRight>
        </button>
      </div>
    </section>
  )
}

setRouterUrl(SliderApp, '/slider')

export default SliderApp