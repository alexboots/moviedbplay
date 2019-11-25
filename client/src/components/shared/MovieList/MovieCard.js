import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from 'components/shared/theme'
import { IMG_URL_W200  } from 'utils/constants'
import NoPoster from './NoPoster.png'

export const MovieCardTitle = styled.h1`
  padding: 0px 0 30px 80px;
`
export const MovieCardGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(8, minmax(100px, 1fr));
  grid-auto-rows: 380px;
  margin-top: 30px;
  padding: 0 80px;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(5, minmax(100px, 1fr));
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }
  @media (max-width: 880px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
  @media (max-width: 630px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const CardImage = styled(motion.div)`
  margin-bottom: 18px;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  display: block;
  img {
    height: 220px;
    border-radius: 12px;
  }
`

const CardLink = styled(Link)`
  color: ${theme.text.default};
  text-decoration: none;
  text-align: center;
  h3:hover {
    color: ${theme.text.secondary}
    text-decoration: underline;
  }
`;

export const MovieCard = ({ movie }) => {
  const imgSrc = movie.poster_path ? `${IMG_URL_W200}${movie.poster_path}` : NoPoster

  return(
    <div key={movie.id}>
      <CardLink to={`/movie/${movie.id}`}>
        <CardImage whileHover={{ scale: 1.04 }}>
          <img src={imgSrc} alt="Movie poster" />
        </CardImage>
        <h3>{movie.title}</h3>
        <div>{new Date(movie.release_date).toLocaleDateString()}</div>
      </CardLink>
    </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
}
