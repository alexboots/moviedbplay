import React from 'react'
import FlashMessage from 'react-flash-message'
import styled from 'styled-components'
import theme from 'theme'

const ErrorBanner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  border: 1px solid ${theme.warn.default};;
  background-color: ${theme.warn.default};
  color: ${theme.warn.wash};
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

console.log('theme', theme);
export const FlashError = ({message}) => (
  <FlashMessage
    duration={3000}
  >
    <ErrorBanner>
      <h3>
        Something went wrong :(
      </h3>
      <div>
        Message: {message.status_message}
      </div>
      <div>
        Status Code: {message.status_code}
      </div>
    </ErrorBanner>
  </FlashMessage>
)
