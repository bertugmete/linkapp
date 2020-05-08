import React from 'react'

import Text from '../text'
import Box from '../box'
import Button from '../button'

export function CardContainer({ children, ...props }) {
  return (
    <Button
      py={8}
      px={16}
      bg="white"
      borderBottomWidth={1}
      borderBottomColor="light"
      {...props}
    >
      <Box flex={1} py={4}>
        {children}
      </Box>
    </Button>
  )
}
export function CardTitle({ children }) {
  return (
    <Text fontSize={18} fontWeight="bold">
      {children}
    </Text>
  )
}

export function CardContent({ children }) {
  return (
    <Text fontSize={14} py={4} color="textMedium">
      {children}
    </Text>
  )
}
