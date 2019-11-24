import React, { useEffect, useReducer, useState } from 'react'
import useSWR, { SWRConfig, trigger }from 'swr'
import { SearchBar } from 'components/SearchBar'
// import { MoviesList } from 'components/MoviesList'

const UPDATE_MOVIE_LIST = 'MOVIE_LIST'
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case UPDATE_MOVIE_LIST:
      return { movies: state.movies };
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export const Home = ({}) => {
  const searchQuery = useState('');
  const [state, dispatch] = useReducer(reducer, initialState)
  const [search, setSearch] = useState('')
  const { data: movies, error } = useSWR('/api/movie/popular')
  console.log('search, search', search);
  console.log('movies', movies);
  // useEffect(() => {
  //   dispatch({ type: UPDATE_MOVIE_LIST, payload: {} })
  // }, [movies, error])

  return (
    <>
      <SearchBar value={search} setValue={setSearch} />
      
    </>
  )
}