import React from 'react'
import PropTypes from 'prop-types';
import useSWR, { SWRConfig, trigger }from 'swr'
import { FlashError } from 'components/Error/FlashMessage';

// Loads popular movies by default, unless another query is specified
export const MovieList = ({ requestUrl = '/api/movie/popular' }) => {
  const { data: movies, error } = useSWR(requestUrl)
  return (
    <div>
      { movies.status_code && <FlashError message={movies} /> }
      asdasd
    </div>
  )
}

MovieList.propTypes = {
  requestUrl: PropTypes.string,
};