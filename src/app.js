import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Search from './screens/search'
import History from './screens/history'
import Links from './screens/links'
import Detail from './screens/detail'
import Profile from './screens/profile'
import SubFolder from './screens/subFolder'

import AddFolder from './screens/addFolder'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import TabBar from './components/tabBar'

import theme from './utils/theme'
import Button from './components/button'
import { Left } from './components/icons'

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
        options={({ route, navigation }) => {
          return {
            title: 'Link Ekle',
            headerStyle: {
              backgroundColor: theme.colors.softRed
            },
            headerLeft: () => (
              <Button
                px={16}
                height="100%"
                onPress={() => navigation.navigate('Home')}
              >
                <Left color={theme.colors.textDark} />
              </Button>
            )
          }
        }}
      />
      <HomeStack.Screen
        name="AddFolder"
        component={AddFolder}
        options={({ route, navigation }) => {
          return {
            title: 'Klasör Ekle',
            headerStyle: {
              backgroundColor: theme.colors.softRed
            },
            headerLeft: () => (
              <Button
                px={16}
                height="100%"
                onPress={() => navigation.navigate('Detail')}
              >
                <Left color={theme.colors.textDark} />
              </Button>
            )
          }
        }}
      />
    </HomeStack.Navigator>
  )
}

const LinkStack = createStackNavigator()

function LinksStackScreen() {
  return (
    <LinkStack.Navigator>
      <LinkStack.Screen
        name="Links"
        component={Links}
        options={{ title: 'Linklerim' }}
      />
      <LinkStack.Screen
        name="SubFolder"
        component={SubFolder}
        navigationOptions={({ route }) => ({ header: route.params.title })}
        // options={({ route }) => ({ title: route.params.title })}
        options={({ route, navigation }) => {
          return {
            title: route.params.title,
            headerStyle: {
              backgroundColor: theme.colors.softRed
            }
          }
        }}
      />
    </LinkStack.Navigator>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Search"
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
            <Tab.Screen name="Links" component={LinksStackScreen} />
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
