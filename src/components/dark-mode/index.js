import React, {useState, useEffect} from 'react';
import data from './data'
import Article from './Article';
import style from './index.module.scss'

const getStorageTheme = () => {
  let theme = 'light-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

function ThemeApp() {
  const [theme, setTheme] = useState(getStorageTheme())

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <main>
      <nav>
        <div className={style['nav-center']}>
          <h1>overreacted</h1>
          <button className={style.btn} onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className={style.articles}>
        {data.map(item => {
          return <Article key={item.id} {...item}></Article>
        })}
      </section>
    </main>
  )
}

export default ThemeApp
