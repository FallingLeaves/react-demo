import React, { useState, useEffect } from 'react';
import { FaEnvelopeOpen, FaUser, FaCalendarTimes, FaMap, FaPhone, FaLock } from 'react-icons/fa'
import style from './index.module.scss'

const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

function RandomuserApp() {
  const [loading, setLoading] = useState(false)
  const [person, setPerson] = useState(null)
  const [value, setValue] = useState('random person')
  const [title, setTitle] = useState('name')
  const getPerson = async () => {
    setLoading(true)
    const res = await fetch(url)
    const data = await res.json()
    const person = data.results[0]
    const { phone, email } = person
    const { large: image } = person.picture
    const { password } = person.login
    const { first, last } = person.name
    const { dob: { age } } = person
    const { street: { number, name } } = person.location

    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`
    }
    setPerson(newPerson)
    setLoading(false)
    setTitle('name')
    setValue(newPerson.name)

  }

  useEffect(() => {
    getPerson()
  }, [])

  const handleValue = e => {
    if (e.target.classList.contains(style.icon)) {
      const newValue = e.target.dataset.label
      setTitle(newValue)
      setValue(person[newValue])
    }
  }

  return (
    <main>
      <div className={`${style.block} ${style['bcg-black']}`}></div>
      <div className={style.block}>
        <div className={style.container}>
          <img src={(person && person.image) || defaultImage} alt='random user' className={style['user-img']}></img>
          <p className={style['user-title']}>My {title} is </p>
          <p className={style['user-value']}>{value}</p>
          <div className={style['values-list']}>
            <button className={style.icon} data-label="name" onMouseOver={handleValue}>
              <FaUser></FaUser>
            </button>
            <button className={style.icon} data-label="email" onMouseOver={handleValue}>
              <FaEnvelopeOpen></FaEnvelopeOpen>
            </button>
            <button className={style.icon} data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes></FaCalendarTimes>
            </button>
            <button className={style.icon} data-label="street" onMouseOver={handleValue}>
              <FaMap></FaMap>
            </button>
            <button className={style.icon} data-label="phone" onMouseOver={handleValue}>
              <FaPhone></FaPhone>
            </button>
            <button className={style.icon} data-label="password" onMouseOver={handleValue}>
              <FaLock></FaLock>
            </button>
          </div>
          <button className={style.btn} type="button" onClick={getPerson}>
            {loading ? 'loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default RandomuserApp