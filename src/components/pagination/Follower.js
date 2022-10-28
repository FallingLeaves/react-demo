import React from 'react';
import style from './index.module.scss'

const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <article className={style.card}>
      <img src={avatar_url} alt={login}></img>
      <h4>${login}</h4>
      <a href={html_url} className={style.btn}>view profile</a>
    </article>
  )
}

export default Follower