import React, { useState, Suspense, useRef, useEffect } from 'react'
import styled from 'styled-components'

import { SearchBar } from 'components/SearchBar'
import { MovieList } from 'components/MovieList'
import { Loader } from 'components/shared/Loader'

const HomeWrap = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Home = () => {
  const searchQuery = useState('');
  const [search, setSearch] = useState('')
  const requestUrl = search ? `/api/search/movie?query=${encodeURIComponent(search)}` : '/api/movie/popular'
  return (
    <HomeWrap>
      <SearchBar value={search} setValue={setSearch} />
      <h2>{search ? 'Results' : 'Popular movies'}</h2>
      <Suspense fallback={<Loader />}>
        <MovieList requestUrl={requestUrl} />
      </Suspense>
    </HomeWrap>
  )
}