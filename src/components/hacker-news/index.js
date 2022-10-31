import React from 'react';
import SearchForm from './SearchForm';
import Stories from './Stories';
import Buttons from './Buttons';
import { NewsProvider } from './context'

function NewsApp() {
  return (
    <NewsProvider>
      <SearchForm></SearchForm>
      <Buttons></Buttons>
      <Stories></Stories>
    </NewsProvider>
  )
}

export default NewsApp