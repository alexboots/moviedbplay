import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import useSWR from 'swr'
import { useParams, Link } from 'react-router-dom'
import { FlashError } from 'components/Error/FlashMessage'
import { MovieList } from 'components/MovieList'
import { Loader } from 'components/shared/Loader'
import { IMG_URL_ORIGINAL } from 'utils/constants'

import { BannerImg, BackButton } from './styles'
import { Details } from './Details'

import {
  MovieCardGrid,
  MovieCard,
  MovieCardTitle,
} from 'components/shared/MovieCard'

import {
  PersonCardsTitle,
  PersonCards,
  PersonCard,
} from 'components/shared/PersonCard'

const MoviePage = () => {
  const params = useParams()
  const appendToResponse = encodeURIComponent('credits,reviews')

  const { data: movie, error } = useSWR(`/api/movie/${params.movieId}?append_to_response=${appendToResponse}`)
  if(error || movie && movie.status_code) {
    return <FlashError message={movie} error={error} />
  }

  const {
    genres,
    budget,
    release_date,
    credits,
    revenue,
    overview,
    reviews,
  } = movie

  return (
    <div>
      <Link to="/">
        <BackButton>
          Home
        </BackButton>
      </Link>

      <BannerImg imgSrc={`${IMG_URL_ORIGINAL}${movie.backdrop_path}`} />

      <Details
        title={movie.title}
        tagline={movie.tagline} 
        overview={overview} 
        genres={genres} 
        revenue={revenue}
        budget={budget}
        release_date={release_date}
      />

      { credits && credits.cast &&
        <section>
          <PersonCardsTitle>Cast</PersonCardsTitle>
          <PersonCards>
            {credits.cast.map(member => (
              <PersonCard key={member.name} member={member} />
            ))}
          </PersonCards>
        </section>
      }

      { reviews && reviews.results.length > 0 &&
        <section style={{marginLeft: '120px', marginBottom: '120px'}}>
          <h1>Review</h1>
          <div>
            <p>author: {reviews.results[0].author}</p>
            <p>author: {reviews.results[0].content}</p>
            <a href="https://www.themoviedb.org/review/50b3c30e760ee30df500021c">Read review</a>
          </div>
        </section>
      }

       { credits && credits.cast &&
        <section>
          <PersonCardsTitle>Crew</PersonCardsTitle>
          <PersonCards>
            {credits.crew.map(member => (
              <PersonCard key={member.name} member={member} />
            ))}
          </PersonCards>
        </section>
      }

      <section style={{minHeight: '900px', marginBottom: '80px'}}>
        <h1 style={{marginLeft: '120px'}}> Similar Movies </h1>
        <Suspense fallback={<Loader />}>
          <MovieList requestUrl={`/api/movie/${params.movieId}/similar`} />
        </Suspense>
      </section>
    </div>
  )
}
export default MoviePage