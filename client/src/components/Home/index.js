import React, { useState, Suspense } from 'react'
import styled from 'styled-components'

import { SearchBar } from './SearchBar'
import { MovieList } from 'components/shared/MovieList'
import { Loader } from 'components/shared/Loader'

const HomeWrap = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Home = () => {
  const [search, setSearch] = useState('')
  const requestUrl = search ? `/api/search/movie?query=${encodeURIComponent(search)}` : '/api/movie/popular'
  return (
    <HomeWrap>
      <SearchBar value={search} setValue={setSearch} placeholder='Find a movie...' />
      <h2>{search ? 'Results' : 'Popular movies'}</h2>
      <Suspense fallback={<Loader />}>
        <MovieList requestUrl={requestUrl} />
      </Suspense>
    </HomeWrap>
  )
}
export default Home