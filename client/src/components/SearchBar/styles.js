import styled from 'styled-components'
import theme from 'theme'

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Input = styled.input`
  width: 300px;
  height: 60px;
  font-size: 24px;
  border-radius: 18px;
  outline-width: 0;
  border: 3px solid;
  padding: 18px 30px;
  padding-right: 90px;

  ::placeholder{
    text-align: center;
  }
`;

export const ClearWrapper = styled.div`
  position: relative;
  left: -80px;
  margin-right: -40px;
`
export const Clear = styled.span`
  height: 30px;
  color: ${theme.text.default};
  background-color: ${theme.brand.wash};
  font-size: 20px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
  opacity: .4;

  &:hover {
    opacity: 1;
    cursor: pointer;
    color: ${theme.brand.default};
  }
`;