import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import theme from 'theme'

const LoaderStyle = styled(motion.div)`
  margin: '0 auto';
  marginTop: '16vh';
  background: ${theme.success.default};
  borderRadius: '30px';
  width: '80px';
  height: '80px';
`

export const Loader = () => (
  <LoaderStyle
    animate={{
      scale: 0.5,
      rotate: [0, 360]
    }}
    transition={{
      yoyo: Infinity,
      duration: 1,
      ease: "easeInOut"
    }}
  />
)