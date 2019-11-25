import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import theme from 'components/shared/theme'

const Title = styled.header`
  border-radius: 18px;
  padding: 30px;
  max-width: 420px;
  background: white;
  margin-left: -30px;
  margin-top: -130px;
`

const DetailsSection = styled.section`
  background: ${theme.bg.default};
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
  display: flex;
  justify-content: center;
  div {
    text-align: center;
    flex: 1;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
const pillStyle = css`
  /*padding: 30px;*/
  background: ${theme.special.wash};
  color: ${theme.text.alt};
  padding: 18px;
  margin: 18px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 18px;
`

const UlPill = styled.ul`
  ${pillStyle}
  list-style: none;
  li {
    border-bottom: 1px solid #ffffff;
    margin-bottom: 4px;
    margin: 10px 0;
  }
`
const DivPill = styled.div`
  ${pillStyle}
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
          <UlPill>
            {genres.map(genre => {
              return <li key={genre.name}>{genre.name}</li>
            })}
          </UlPill>
        </div>
        <div>
          <h4>Revenue</h4>
          <DivPill >
            {revenue.toLocaleString("en-US", {style: "currency",currency: "USD"})}
          </DivPill>
        </div>
        <div>
          <h4>budget</h4>
          <DivPill>
            {budget.toLocaleString("en-US", {style: "currency",currency: "USD"})}
          </DivPill>
        </div>
        <div>
          <h4>Release date</h4>
          <DivPill>
            {new Date(release_date).toLocaleDateString()}
          </DivPill>
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
