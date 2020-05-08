import React from 'react'
import { SafeAreaView, Animated, StyleSheet, Dimensions } from 'react-native'
import CustomHeader from '../../components/header'
import Button from '../../components/button'
import Box from '../../components/box'
import Text from '../../components/text'

const styles = {
  cover: {
    backgroundColor: 'rgba(0,0,0,.5)'
  }
}

function Favourites() {
  return (
    <Box as={SafeAreaView}>
      <CustomHeader />
    </Box>
  )
}

export default Favourites
