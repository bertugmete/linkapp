import React from 'react'

import Button from '../button'
import { Search, Favourites, BookOpen, Link } from '../icons'
import Box from '../box'

import theme from '../../utils/theme'
import Links from '../../screens/links'

function TabBar({ state, descriptors, navigation }) {
  return (
    <Box
      pb={20}
      flexDirection="row"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 20
      }}
      bg="white"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        switch (label) {
          case 'Search':
            return (
              <TabBarButton
                onPress={onPress}
                isFocused={isFocused}
                above
                label={label}
                key={label}
              >
                <Search color="white" />
              </TabBarButton>
            )
          case 'Links':
            return (
              <TabBarButton
                onPress={onPress}
                isFocused={isFocused}
                label={label}
                key={label}
              >
                <Link
                  color={isFocused ? theme.colors.red : theme.colors.textLight}
                />
              </TabBarButton>
            )
          case 'History':
            return (
              <TabBarButton
                onPress={onPress}
                isFocused={isFocused}
                label={label}
                key={label}
              >
                <BookOpen
                  color={isFocused ? theme.colors.red : theme.colors.textLight}
                />
              </TabBarButton>
            )
          default:
            break
        }
      })}
    </Box>
  )
}

export function TabBarButton({ children, onPress, isFocused, above = false }) {
  let spaceBetween = 6
  // For search
  return above ? (
    <Box p={15} mt={-15} borderRadius="full" bg="white">
      <Button
        pt={spaceBetween}
        flexDirection="column"
        size={56}
        onPress={onPress}
        borderRadius="full"
        bg="red"
      >
        {children}
        <Box size={3} bg="red" mt={spaceBetween} borderRadius={'full'} />
      </Button>
    </Box>
  ) : (
    <Button
      pt={spaceBetween}
      flexDirection="column"
      height={56}
      flex={1}
      onPress={onPress}
    >
      {children}
      {isFocused ? (
        <Box size={3} bg="red" mt={spaceBetween} borderRadius={'full'} />
      ) : (
        <Box size={3} bg="white" mt={spaceBetween} borderRadius={'full'} />
      )}
    </Button>
  )
}

export default TabBar
