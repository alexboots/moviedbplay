import styled from 'styled-components'
import theme from 'theme'

export const BannerImg = styled.img`
  height: 100vh;
  width: 100vw;
  background: url(${props => props.imgSrc}) no-repeat center center fixed;
  background-color: ${theme.brand.dark};
  background-size: cover;
`

export const Details = styled.div`
  background: ${theme.color.white};
  position: relative;
  width: 70%;
  height: 34vh;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 18px;
  padding: 30px;
`

export const Title = styled.header`
  border-radius: 18px;
  padding: 30px;
  max-width: 420px;
  background: white;
  margin-left: -30px;
  margin-top: -130px;
`
export const BackButton = styled.div`
  font-size: 18px;
  border-radius: 4px;
  text-decoration: none;
  background: ${theme.color.white};
  height: 20px;
  width: 46px;
  padding: 8px;
  position: absolute;
  top: 30px;
  left: 30px;
  opacity: .6;
  text-align: center;
  transition: opacity 0.3s;
  &:active{
    color: #333;
  }
  &:hover {
    opacity: 1;
  }
`
export const HorizontalCards = styled.section`
  min-width: 80%;
  min-height: 200px;
  display: flex;
  background-color: ${theme.generic.alt};

  overflow-x: auto;
  padding: 30px;
  padding-left: 120px;
  margin-bottom: 120px;
`

export const HorizontalCard = styled.div`
  background-color: ${theme.bg.default};
  min-width: 200px;
  margin: 5px;
  border-radius: 18px;
`

export const HorizontalCardsTitle = styled.h1`
  margin-left: 120px;
`
