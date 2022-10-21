import React from "react";
import Review from './Review'
import style from './index.module.scss'
import { setRouterUrl } from "utils";

function ReviewApp() {
  return (
    <main>
      <section className={style.container}>
        <div className={style.title}>
          <h2>our reviews</h2>
          <div className={style.underline}></div>
        </div>
        <Review></Review>
      </section>
    </main>
  )
}

setRouterUrl(ReviewApp, '/reviews')

export default ReviewApp