import React, { useState, useEffect } from "react";
import style from './index.module.scss'
import Loading from './Loading'
import Tours from './Tours'
import { setRouterUrl } from "utils";

const url = 'https://course-api.com/react-tours-project'

function ToursApp() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = id => {
    const newTours = tours.filter(tour => {
      return tour.id !== id
    })
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main><Loading></Loading></main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className={style.title}>
          <h2>no tours left</h2>
          <button className={style.btn} onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </main>
  )
}

setRouterUrl(ToursApp, "/tours")

export default ToursApp