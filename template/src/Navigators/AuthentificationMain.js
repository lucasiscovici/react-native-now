import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Auth, IndexStartupContainer } from '@/Containers'

import { selectors as authSelectors } from '@/state/auth'

import { actions as meActions, selectors as meSelectors } from '@/state/me'

import { useNavigation } from '@react-navigation/native'

import { IndexExampleContainer } from '@/Containers'

const AuthenticatedStack = () => {
  const { navigate } = useNavigation()

  const isStatusFinish = meSelectors.isStatusFinish()

  React.useEffect(() => {
    meActions.getMe()
  }, [])

  React.useEffect(() => {
    const a = isStatusFinish ? 'Home' : 'default'

    if (a !== 'default') {
      navigate(a)
    }
  }, [isStatusFinish, navigate])

  return (
    <Stack.Navigator
      options={{ animationEnabled: false }}
      initialRouteName={'default'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        options={{ animationEnabled: false }}
        component={IndexExampleContainer}
      />

      <Stack.Screen name="default" component={IndexStartupContainer} />
    </Stack.Navigator>
  )
}

const Stack = createStackNavigator()

// @refresh reset
const AuhthenticationMainNavigator = () => {
  const isAuthenticated = authSelectors.isAuthenticated()

  return (
    <Stack.Navigator headerMode={'none'}>
      {isAuthenticated ? (
        <Stack.Screen
          options={{ animationEnabled: false }}
          name="AuthenticatedStack"
          component={AuthenticatedStack}
        />
      ) : (
        <Stack.Screen name="Login" component={Auth.Login} />
      )}
    </Stack.Navigator>
  )
}

export default AuhthenticationMainNavigator
