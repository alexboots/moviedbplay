import React, { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import useSWR from 'swr'
import { joinQuery  } from 'utils/helpers'
import { FlashError } from 'components/Error/FlashMessage'

import { Pagination } from './Pagination'
import { MovieCardGrid, MovieCard } from './MovieCard'

export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'
const RECEIVED_NEW_QUERY = 'RECEIVED_NEW_QUERY'
const RECEIVED_NEW_MOVIES = 'RECEIVED_NEW_MOVIES'

function init(requestUrl) {
  const joinParam = joinQuery(requestUrl)
  return {
    page: 1,
    query: `${requestUrl}${joinParam}page=${1}`,
    moviesList: [],
    totalPages: null
  }
}

function reducer(state, action) {
  const joinParam = joinQuery(state.query)
  switch (action.type) {
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
        query: `${state.query}${joinParam}page=${state.page + 1}`
      }
    case PREV_PAGE:
      return {
        ...state,
        page: state.page - 1,
        query: `${state.query}${joinParam}page=${state.page - 1}`
      }
    case RECEIVED_NEW_QUERY:
      return {...state, query: action.requestUrl, page: 1 }
    case RECEIVED_NEW_MOVIES:
      return {
        ...state,
        moviesList: [...action.movies.results],
        totalPages: action.movies.total_pages,
      }
    default:
      return state
  }
}

// Loads popular movies by default, unless another query is specified
export const MovieList = ({ requestUrl = '/api/movie/popular' }) => {
  const [state, dispatch] = useReducer(reducer, requestUrl, init)
  const { data: movies, error } = useSWR(state.query)

  useEffect(() => {
    dispatch({ type: RECEIVED_NEW_QUERY, requestUrl })
  }, [requestUrl])

  useEffect(() => {
    if(movies && movies.results) {
      dispatch({ type: RECEIVED_NEW_MOVIES, movies })
    }
  }, [movies])

  if(movies && movies.status_code) {
    return <FlashError message={movies} error={error} />
  } else if (error) {
    return <FlashError error={error} />
  }

  if(state.moviesList.length === 0) {
    return <h3>No movies found</h3>
  }

  return (
    <div>
      <Pagination
        dispatch={dispatch}
        totalPages={state.totalPages}
        currentPage={state.page}
      />

      <MovieCardGrid>
        { state.moviesList.map((movie, i) => <MovieCard key={`${movie.title}${i}${movie.id}`} movie={ movie } /> )}
      </MovieCardGrid>

      <Pagination
        dispatch={dispatch}
        totalPages={state.totalPages}
        currentPage={state.page}
      />
    </div>
  )
}

MovieList.propTypes = {
  requestUrl: PropTypes.string,
}