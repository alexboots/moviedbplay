import React from 'react'
import FlashMessage from 'react-flash-message'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import theme from 'theme'

const ErrorBanner = styled(motion.div)`
  position: absolute;
  top: 30px;
  right: 30px;
  height: 120px;
  width: 400px;
  padding: 18px;
  border-radius: 30px;
  border: 1px solid ${theme.warn.default};;
  background-color: ${theme.warn.default};
  color: ${theme.warn.wash};
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

export const FlashError = ({message, error}) => (
  <FlashMessage
    duration={5000}
  >
    <ErrorBanner
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h4>
        Something went wrong :(
      </h4>
      <div>
        Message: {message.status_message} Status Code: {message.status_code}
      </div>
      <div>
        {error}
      </div>
    </ErrorBanner>
  </FlashMessage>
)
