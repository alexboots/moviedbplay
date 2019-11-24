import React from 'react'
import useSWR, { SWRConfig, trigger }from 'swr'

export const Home = (props) => {
  const { data, error, isValidating, revalidate} = useSWR('/api/movie/popular')
  console.log('isValidating', isValidating);
  if (!data) return 'loading...'
  console.log('data, data', data);
  return (<div onClick={()=> {
    console.log('hi');
    revalidate()
  }}>Home</div>)
}