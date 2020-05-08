import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native'
import CustomHeader from '../../components/header'
import Box from '../../components/box'
import Text from '../../components/text'
import Button from '../../components/button'

function Favourites() {
  return (
    <Box as={SafeAreaView}>
      <CustomHeader />
      <Button>
        <Text>asda</Text>
      </Button>
    </Box>
  )
}

export default Favourites
