import React from 'react';
import style from './index.module.scss'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext()

  return (
    <form className={style['search-form']} onSubmit={e => e.preventDefault()}>
      <h2>search hacker news</h2>
      <input type='text' className={style['form-input']} value={query} onChange={e => handleSearch(e.target.value)}></input>
    </form>
  )
}

export default SearchForm