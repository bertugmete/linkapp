import React from 'react'
import Box from '../../components/box'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function Detail() {
  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>History!</Text>
    </Box>
  )
}

export default Detail
