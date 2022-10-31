import React from 'react';
import style from './index.module.scss'

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext()
  if (isLoading) {
    return (
      <div className={style.loading}></div>
    )
  }
  return (
    <section className={style.stories}>
      {
        hits && hits.map(story => {
          const { objectID, title, num_comments, url, points, author } = story
          return (
            <article key={objectID} className={style.story}>
              <h4 className={style.title}>{title}</h4>
              <p className={style.info}>
                {points} points by <span>{author} | </span> {num_comments}{' '} comments
              </p>
              <div>
                <a href={url} className={style['read-link']} target="_blank" rel='noopener noreferrer'>
                  read more
                </a>
                <button className={style['remove-btn']} onClick={() => removeStory(objectID)}>remove</button>
              </div>
            </article>
          )
        })
      }
    </section>
  )
}

export default Stories