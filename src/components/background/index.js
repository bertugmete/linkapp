import React from 'react'
import { ImageBackground } from 'react-native'

import Box from '../box'

import bg from '../../assets/images/bg.jpg'

export default function Background({ children, ...props }) {
  return (
    <Box
      as={ImageBackground}
      source={bg}
      style={{ width: '100%', height: '100%' }}
      {...props}
    >
      {/* logo */}
      {children}
    </Box>
  )
}
