import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Search from './screens/search'
import History from './screens/history'
import Favourites from './screens/favourites'
import Detail from './screens/detail'
import Profile from './screens/profile'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import TabBar from './components/tabBar'

import theme from './utils/theme'

const Tab = createBottomTabNavigator()
const HomeStack = createStackNavigator()

const navOptionsHandler = () => ({
  headerShown: false
})

const TopTab = createMaterialTopTabNavigator()

function SearchStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Search}
        options={navOptionsHandler}
      />
      <HomeStack.Screen
        name="Detail"
        component={Detail}
        options={navOptionsHandler}
      />
    </HomeStack.Navigator>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Favourites"
            tabBar={(props) => <TabBar {...props} />}
          >
            <Tab.Screen
              name="History"
              component={History}
              options={navOptionsHandler}
            />
            <Tab.Screen
              name="Search"
              component={SearchStackScreen}
              options={navOptionsHandler}
            />
            <Tab.Screen
              name="Favourites"
              component={Favourites}
              options={navOptionsHandler}
            />
            <TopTab.Screen
              name="Profile"
              component={Profile}
              options={navOptionsHandler}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
