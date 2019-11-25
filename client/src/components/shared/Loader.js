import React from 'react'
import { motion } from "framer-motion"
import theme from 'theme'

export const Loader = () => (
  <motion.div
    animate={{
      scale: 0.5,
      rotate: [0, 360]
    }}
    transition={{
      yoyo: Infinity,
      duration: 1,
      ease: "easeInOut"
    }}

    style={{
      margin: '0 auto',
      marginTop: '16vh',
      background: `${theme.success.default}`,
      borderRadius: '30px',
      width: '80px',
      height: '80px',
    }}
  />
)