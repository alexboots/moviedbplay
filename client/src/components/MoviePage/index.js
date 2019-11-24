import React from 'react'
import useSWR from 'swr'
import { useParams, Link } from 'react-router-dom'
import { FlashError } from 'components/Error/FlashMessage'
import { IMG_URL_ORIGINAL, IMG_URL_W200 } from 'utils/constants'
import {
  BannerImg,
  Details,
  Title,
  BackButton,
  HorizontalCards,
  HorizontalCard,
  HorizontalCardsTitle,
} from './styles'

import {
  MovieCardGrid,
  MovieCard,
  MovieCardTitle,
} from 'components/shared/MovieCard'

export const MoviePage = () => {
  const params = useParams()
  const appendToResponse = encodeURIComponent('credits,similar,reviews')
  const { data: movie, error } = useSWR(`/api/movie/${params.movieId}?append_to_response=${appendToResponse}`)
  if(error || movie && movie.status_code) {
    return <FlashError message={movie} error={error} />
  }

  console.log('movie', movie);

  const {
    genres, // [{ id, name }]
    budget, // num
    release_date,
    credits, // cast [] crew []
    similar, // results []
    revenue,
    overview
  } = movie //

  return (
    <div>
      <Link to="/">
        <BackButton>
          Home
        </BackButton>
      </Link>
      <BannerImg imgSrc={`${IMG_URL_ORIGINAL}${movie.backdrop_path}`} />
      <Details>
        <Title>
          <h1>{movie.title}</h1>
          <h3>{movie.tagline}</h3>
        </Title>
        <div>
          {overview}
        </div>
        <div>
          <h4>Genres</h4>
          <ul>
            {genres.map(genre => {
              return <li>{genre.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h4>Revenue</h4>
          <div>
            {revenue.toLocaleString("en-US", {style: "currency",currency: "USD"})}
          </div>
          <h4>budget</h4>
          <div>
            {budget.toLocaleString("en-US", {style: "currency",currency: "USD"})}
          </div>
          <h4>Release date</h4>
          <div>
            {new Date(release_date).toLocaleDateString()}
          </div>
          
        </div>
      </Details>
      { credits && credits.cast &&
        <>
          <HorizontalCardsTitle>Cast</HorizontalCardsTitle>
          <HorizontalCards>
            {credits.cast.map(member => {
              const src = member.profile_path ?
                `${IMG_URL_W200}${member.profile_path}` :
                'https://imgplaceholder.com/200x300?text=No+headhot&font-family=Roboto'
              return (
                <HorizontalCard>
                  <img
                    src={src}
                    style={{
                      borderRadius: '6px',
                      height: '300px',
                      width: '200px'
                    }}
                  />
                  <div style={{padding: '0 30px'}}>
                    <h3 style={{margin: '10px 0 0 0'}}>{member.name}</h3>
                    As
                      <h4 style={{
                        display: 'inline-block',
                        margin: '12px 0 0 4px',
                      }}>
                        {member.character}
                      </h4>
                  </div>
                </HorizontalCard>
              )
            })}
          </HorizontalCards>
        </>
      }

      { similar && similar.results &&
        <>
          <MovieCardTitle>Similar movies</MovieCardTitle>
          <MovieCardGrid>
            { similar.results.map(movie => (
              <MovieCard movie={ movie } />)
            )}
          </MovieCardGrid>
        </>
      }
    </div>
  )
}