import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'theme'

const Title = styled.header`
  border-radius: 18px;
  padding: 30px;
  max-width: 420px;
  background: white;
  margin-left: -30px;
  margin-top: -130px;
`

const DetailsSection = styled.section`
  background: ${theme.color.white};
  position: relative;
  width: 70%;
  height: 34vh;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 18px;
  padding: 30px;
`

const DetailsMain = styled.section`
  padding: 0 120px;
  margin-top: -32vh;
  position: relative;
  z-index: 999;
`

export const Details = ({title, tagline, overview, genres, revenue, budget, release_date}) => (
  <>
    <DetailsSection key={`${release_date}${revenue}`}>
      <Title>
        <h1>{title}</h1>
        <h3>{tagline}</h3>
      </Title>
      <div>
        {overview}
      </div>
    </DetailsSection>
    <DetailsMain>
      <div>
        <h4>Genres</h4>
        <ul>
          {genres.map(genre => {
            return <li key={genre.name}>{genre.name}</li>
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
    </DetailsMain>
  </>
)

DetailsSection.propTypes = {
  tagline: PropTypes.string,
  genres: PropTypes.array,
  revenue: PropTypes.string,
  budget: PropTypes.string,
  release_date: PropTypes.string,
  overview: PropTypes.string,
}
