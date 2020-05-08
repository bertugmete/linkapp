import React from 'react'
import { Text, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../../components/box'

function Profile() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )

  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>History!</Text>
    </Box>
  )
}

export default Profile
