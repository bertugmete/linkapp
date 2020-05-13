import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native'
import CustomHeader from '../../components/header'
import Box from '../../components/box'
import Text from '../../components/text'
import Button from '../../components/button'
import { FolderItemData } from '../../data/folderItemData'
import { Folder, Right } from '../../components/icons'
import theme from '../../utils/theme'

function Links({ navigation }) {
  return (
    <Box as={SafeAreaView}>
      {FolderItemData.map((item) => (
        <Box alignItems="center" flexDirection="row" px={16} height={48}>
          <Folder color={theme.colors.textLight} />
          <Box
            borderColor={theme.colors.textLight}
            borderBottomWidth={1}
            flex={1}
            height="100%"
            ml={12}
            alignItems="center"
            flexDirection="row"
          >
            <Button
              onPress={() =>
                navigation.navigate('SubFolder', {
                  title: item.title
                })
              }
              width="100%"
              key={item.title}
              alignItems="center"
              justifyContent="flex-start"
              height="100%"
            >
              <Text flex={1} fontSize={16}>
                {item.title}
              </Text>
              <Right color={theme.colors.textLight} />
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Links
