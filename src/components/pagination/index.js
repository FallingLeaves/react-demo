import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch'
import Follower from './Follower';
import style from './index.module.scss'

function PaginateApp() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])

  const nextPage = () => {
    setPage(oldPage => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  const prevPage = () => {
    setPage(oldPage => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  const handlePage = index => {
    setPage(index)
  }

  return (
    <main>
      <div className={style['section-title']}>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className={style.underline}></div>
      </div>
      <section className={style.followers}>
        <div className={style.container}>
          {followers && followers.map(item => {
            return <Follower key={item.id} {...item}></Follower>
          })}
        </div>
        {!loading && (
          <div className={style['btn-container']}>
            <button className={style['prev-btn']} onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`${style['page-btn']} ${index === page ? style['active-btn'] : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className={style['next-btn']} onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default PaginateApp
