import React from 'react';
import moment from 'moment';
import style from './index.module.scss'

const Article = ({ title, snippet, date, length }) => {
  return (
    <article className={style.post}>
      <h2>{title}</h2>
      <div className={style['post-info']}>
        <span>{moment(date).format('dddd Do, YYYY')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article