import React from 'react';
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'
import style from './index.module.scss'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()
  return (
    <section className={style.hero} onMouseOver={closeSubmenu}>
      <div className={style['hero-center']}>
        <article className={style['hero-info']}>
          <h1>payments infrastructure <br></br> for th internet</h1>
          <p>Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.</p>
          <button className={style.btn}>start now</button>
        </article>
        <article className={style['hero-images']}>
          <img src={phoneImg} className={style['phone-img']} alt="phone"></img>
        </article>
      </div>
    </section>
  )
}

export default Hero