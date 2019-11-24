import React, { useState, useReducer } from 'react'
import useSWR, { SWRConfig, trigger }from 'swr'
import { SearchBar } from 'components/SearchBar'


export const Home = ({}) => {
  const searchQuery = useState('');
  const { data, error } = useSWR('/api/movie/popular')

  return (
    <div>
      Home
      <SearchBar />
    </div>
  )
}