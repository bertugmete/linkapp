import React, { useRef, useEffect } from 'react'
import { Linking } from 'react-native'

import { SafeAreaView } from 'react-native'
import CustomHeader from '../../components/header'
import Box from '../../components/box'
import Text from '../../components/text'
import Button from '../../components/button'
import { FolderItemData } from '../../data/folderItemData'
import { Folder, Right, Link } from '../../components/icons'
import theme from '../../utils/theme'

function SubFolder({ route, navigation }) {
  useEffect(() => {
    navigation.setParams({
      header: route.params.title
    })
  }, [])

  const findItemNested = (arr, itemId, nestingKey) =>
    arr.reduce((a, item) => {
      if (a) return a
      if (item.title === itemId) return item
      if (item[nestingKey])
        return findItemNested(item[nestingKey], itemId, nestingKey)
    }, null)

  const res = findItemNested(FolderItemData, route.params.title, 'items').items

  const generator = (b) => {
    let result =
      b &&
      b.map((item) => {
        let isLink = item.type === 'link'
        if (isLink) {
          return (
            <Box alignItems="center" flexDirection="row" px={16} height={48}>
              <Link />
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
                  onPress={() => Linking.openURL(item.link)}
                  width="100%"
                  key={item.title}
                  alignItems="center"
                  justifyContent="flex-start"
                  height="100%"
                >
                  <Text fontSize={16}>{item.title}</Text>
                </Button>
              </Box>
            </Box>
          )
        } else {
          return (
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
                    navigation.push('SubFolder', {
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
          )
        }
      })
    return result
  }

  let a = generator(res)

  console.log(a)

  return <>{a}</>
}

SubFolder.navigationOptions = ({ navigation }) => {
  return {
    header: navigation.getParam('title')
  }
}
export default SubFolder
