import React, { useRef } from 'react'
import Box from '../../components/box'
import { Logo, Add, Menu } from '../../components/icons'
import Button from '../button'
import theme from '../../utils/theme'
import RBSheet from 'react-native-raw-bottom-sheet'
import SettingsSvg from '../../components/icons/Settings'
import { User } from '../../components/icons'
import Text from '../../components/text'

export default function CustomHeader(props) {
  const refRBSheet = useRef()

  return (
    <>
      <Box flexDirection="row" height={50} backgroundColor="white" {...props}>
        <Box flex={1} justifyContent="center" alignItems="center">
          <Button onPress={() => refRBSheet.current.open()}>
            <Menu color={theme.colors.textLight} />
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
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown
        customStyles={{
          draggableIcon: {
            backgroundColor: '#DEE3E3',
            width: 58
          },
          container: {
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 8
          }
        }}
      >
        <YourOwnComponent />
      </RBSheet>
    </>
  )
}
const YourOwnComponent = () => {
  return (
    <Box>
      <Box
        px={20}
        borderBottomWidth={1}
        flexDirection="row"
        borderBottomColor="light"
        justifyContent="center"
        alignItems="center"
        py={15}
      >
        <Button>
          <User color={theme.colors.textDark} />
          <Text fontSize={18} color="textDark" flex={1} px={20}>
            Profilim
          </Text>
        </Button>
      </Box>
      <Box
        px={20}
        borderBottomWidth={1}
        flexDirection="row"
        borderBottomColor="light"
        justifyContent="center"
        alignItems="center"
        py={15}
      >
        <Button>
          <SettingsSvg color={theme.colors.textDark} />
          <Text fontSize={18} color="textDark" flex={1} px={20}>
            Ayarlar
          </Text>
        </Button>
      </Box>
    </Box>
  )
}
