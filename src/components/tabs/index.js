import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from 'react-icons/fa'
import style from './index.module.scss'
import { setRouterUrl } from "utils";

const url = 'https://course-api.com/react-tabs-project'

function TabsApp() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <section className={`${style.section} ${style.loading}`}>
        <h1>loading...</h1>
      </section>
    )
  }
  const { company, dates, duties, title } = jobs[value]
  return (
    <section className={style.section}>
      <div className={style.title}>
        <h2>experience</h2>
        <div className={style.underline}></div>
      </div>
      <div className={style['jobs-center']}>
        <div className={style['ben-container']}>
          {jobs.map((item, index) => {
            return (
              <button key={item.id} onClick={() => setValue(index)} className={`${style['job-btn']} ${index === value && style['active-btn']}`}>
                {item.company}
              </button>
            )
          })}
        </div>
        <article className={style['job-info']}>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className={style['job-date']}>
            {dates}
          </p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className={style['job-desc']}>
                <FaAngleDoubleRight className={style['job-icon']}></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button type="button" className={style.btn}>more info</button>
    </section>
  )
}

setRouterUrl(TabsApp, '/tabs')

export default TabsApp