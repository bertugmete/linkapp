import React from 'react'
import Box from '../../components/box'
import { Logo, Add } from '../../components/icons'
import UserSvg from '../../components/icons/User'
import Button from '../button'
import theme from '../../utils/theme'

export default function CustomHeader(props) {
  return (
    <Box flexDirection="row" height={50} backgroundColor="white" {...props}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Button onPress={this.handleOpen}>
          <UserSvg color={theme.colors.textLight} />
        </Button>
      </Box>
      <Box flex={5} justifyContent="center" alignItems="center">
        <Logo width={50} color="red" />
      </Box>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Button>
          <Add color={theme.colors.textLight} />
        </Button>
      </Box>
    </Box>
  )
}
