import React, { useState, Suspense } from 'react'
import { SearchBar } from 'components/SearchBar'
import { MovieList } from 'components/MovieList'

const UPDATE_MOVIE_LIST = 'MOVIE_LIST'
const initialState = {count: 0};

export const Home = () => {
  const searchQuery = useState('');
  const [search, setSearch] = useState('')

  const requestUrl = search ? `/api/search/movie?query=${encodeURIComponent(search)}` : '/api/movie/popular'
  return (
    <>
      <SearchBar value={search} setValue={setSearch} />
      <Suspense fallback={<div>Loading...</div>}>
        <MovieList requestUrl={requestUrl} />
      </Suspense>
    </>
  )
}