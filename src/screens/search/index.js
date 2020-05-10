import React, { useEffect } from 'react'
import { StatusBar, Animated, FlatList, Linking } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import { Logo } from '../../components/icons'
import Box from '../../components/box'

import Text from '../../components/text'
import SearchInput from '../../components/searchInput'
import Background from '../../components/background'

import { CardTitle, CardContent, CardContainer } from '../../components/card'
import CustomHeader from '../../components/header'

const DATA = [
  {
    title: 'Twitter',
    link: 'https://www.twitter.com/tr/'
  },
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/'
  },
  {
    title: 'Apple',
    link: 'https://www.apple.com/tr/'
  },
  {
    title: 'Twitter',
    link: 'https://www.twitter.com/tr/'
  },
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/tr/'
  },
  {
    title: 'Apple',
    link: 'https://www.apple.com/tr/'
  }
]

const DATA2 = [
  {
    title: 'Javascript',
    link: 'https://javascript.com'
  },
  {
    title: 'ReactJs',
    link: 'https://reactjs.com'
  }
]

const HERO_HEIGHT = 230

function Search({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false)

  const [heroHeight] = React.useState(new Animated.Value(HERO_HEIGHT))
  const [bgOpacity] = React.useState(new Animated.Value(1))

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'dark-content')
    }, [isSearchFocus])
  )

  useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 230
      }).start()
      Animated.timing(heroHeight, {
        toValue: 52 + 32,
        duration: 230
      }).start()
    } else {
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 230
      }).start()
      Animated.timing(heroHeight, {
        toValue: HERO_HEIGHT,
        duration: 230
      }).start()
    }
  }, [heroHeight, bgOpacity, isSearchFocus])

  return (
    <Box as={SafeAreaView} bg="white" flex={1}>
      <Box as={Animated.View} top={isSearchFocus ? -100 : 0}>
        <CustomHeader onPress={() => navigation.navigate('Detail')} />
      </Box>
      {/* Header */}
      <Box
        as={Animated.View}
        position="relative"
        zIndex={1}
        height={heroHeight}
        py={0}
      >
        <Box as={Animated.View} opacity={bgOpacity}>
          <Background pt={60} pb={26}>
            <Box flex={1} alignItems="center" justifyContent="center">
              <Logo width={120} color="white" />
            </Box>
          </Background>
        </Box>
        {/* search */}
        <Box
          position="absolute"
          left={0}
          bottom={isSearchFocus ? 42 : -26}
          px={16}
          width="100%"
        >
          <SearchInput onChangeFocus={(status) => setSearchFocus(status)} />
        </Box>
      </Box>

      {/* content */}
      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box px={30} flex={1}>
            <FlatList
              keyboardShouldPersistTaps="always"
              keyboardDismissMode="on-drag"
              data={DATA2}
              ListHeaderComponent={
                <Text fontSize={16} pb={16} color="textLight">
                  Son Aramalar
                </Text>
              }
              renderItem={({ item }) => (
                <Box>
                  <CardContainer
                    onPress={() => {
                      Linking.openURL(item.link)
                    }}
                  >
                    <CardTitle>{item.title}</CardTitle>
                    <CardContent>{item.link}</CardContent>
                  </CardContainer>
                </Box>
              )}
              keyExtractor={(item) => item.title}
            />
          </Box>
        ) : (
          <Box py={40} px={16} flex={1}>
            <FlatList
              ListHeaderComponent={
                <Text fontSize={16} pb={16} color="textLight">
                  Son Eklenenler
                </Text>
              }
              data={DATA}
              keyboardShouldPersistTaps="always"
              keyboardDismissMode="on-drag"
              renderItem={({ item }) => (
                <Box>
                  <CardContainer
                    onPress={() => {
                      Linking.openURL(item.link)
                    }}
                  >
                    <CardTitle>{item.title}</CardTitle>
                    <CardContent>{item.link}</CardContent>
                  </CardContainer>
                </Box>
              )}
              keyExtractor={(item) => item.title}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Search
