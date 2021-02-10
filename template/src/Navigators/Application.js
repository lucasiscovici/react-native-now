import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexStartupContainer } from '@/Containers'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@/Navigators/Root'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useTheme } from '@/Theme'
import { AppearanceProvider } from 'react-native-appearance'

import { selectors as startupSelectors } from '@/State/Startup'
import { navigateAndSimpleReset } from '@/Navigators/Root'

let MainNavigator
const Stack = createStackNavigator()

const ApplicationNavigation = () => {
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)
  const applicationIsLoading = startupSelectors.isPending() //useSelector((state) => state.startup.loading)
  useEffect(() => {
    if (MainNavigator == null && !applicationIsLoading) {
      MainNavigator = require('@/Navigators/AuthentificationMain').default
      setIsApplicationLoaded(true)
    }
  }, [applicationIsLoading])

  useEffect(() => {
    if (isApplicationLoaded) {
      // Navigate and reset to the main navigator
      navigateAndSimpleReset('Main')
    }
  }, [isApplicationLoaded])

  // on destroy needed to be able to reset when app close in background (Android)
  useEffect(
    () => () => {
      setIsApplicationLoaded(false)
      MainNavigator = null
    },
    [],
  )

  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Startup" component={IndexStartupContainer} />
      {isApplicationLoaded && MainNavigator != null && (
        <Stack.Screen
          name="Main"
          component={MainNavigator}
          options={{
            animationEnabled: false,
          }}
        />
      )}
    </Stack.Navigator>
  )
}

// @refresh reset
const ApplicationNavigator = () => {
  const theme = useTheme()

  /*  <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>*/
  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <NavigationContainer theme={theme.NavigationTheme} ref={navigationRef}>
          <StatusBar
            barStyle={theme.darkMode ? 'light-content' : 'dark-content'}
          />
          <ApplicationNavigation />
        </NavigationContainer>
      </AppearanceProvider>
    </SafeAreaProvider>
  )
}

export default ApplicationNavigator
