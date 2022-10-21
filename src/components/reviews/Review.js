import React, { useState } from "react";
import people from './data'
import style from './index.module.scss'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }
  const nextPerson = () => {
    setIndex(index => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex(index => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }

  return (
    <article className={style.review}>
      <div className={style['img-container']}>
        <img src={image} alt={name} className={style['person-img']}></img>
        <span className={style['quote-icon']}>
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <h4 className={style.author}>{name}</h4>
      <p className={style.job}>{job}</p>
      <p className={style.info}>{text}</p>
      <div className={style['button-container']}>
        <button className={style['prev-btn']} onClick={prevPerson}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className={style['next-btn']} onClick={nextPerson}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
      <button className={style['random-btn']} onClick={randomPerson}>
        surprise me
      </button>
    </article>
  )
}

export default Review