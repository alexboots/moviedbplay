import styled from 'styled-components'
import theme from 'theme'

export const BannerImg = styled.img`
  height: 100vh;
  width: 100vw;
  background: url(${props => props.imgSrc}) no-repeat center center fixed;
  background-color: ${theme.brand.dark};
  background-size: cover;
`

export const BackButton = styled.div`
  font-size: 18px;
  border-radius: 4px;
  text-decoration: none;
  background: ${theme.bg.default};
  height: 20px;
  width: 46px;
  padding: 8px;
  position: absolute;
  top: 30px;
  left: 30px;
  opacity: .6;
  text-align: center;
  transition: opacity 0.3s;
  position: absolute;
  &:active{
    color: #333;
  }
  &:hover {
    opacity: 1;
  }
`
