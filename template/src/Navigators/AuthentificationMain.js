import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Auth, IndexStartupContainer } from '@/Containers'

// import { actions as meActions, selectors as meSelectors } from '@/State/me'

import { useNavigation } from '@react-navigation/native'
import { IndexExampleContainer } from '@/Containers'
import { useAuth } from '@/Services/Auth'
import {
  actions as userActions,
  selectors as userSelectors,
} from '@/State/User'
const Tab = createBottomTabNavigator()

const AuthenticatedStackTab = ({ logout }) => (
  <Tab.Navigator
    tabBarOptions={{
      labelPosition: 'beside-icon',
      labelStyle: {
        marginLeft: 0,
        padding: 0,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      options={{
        tabBarLabel: 'Exemple',
      }}
    >
      {(props) => <IndexExampleContainer {...props} logout={logout} />}
    </Tab.Screen>
  </Tab.Navigator>
)
const AuthenticatedStack = () => {
  const { navigate } = useNavigation()

  const isStatusFinish = userSelectors.isStatusFinish()

  const { logout } = useAuth()

  React.useEffect(() => {
    userActions.getUser({ userId: 1 })
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
      <Stack.Screen name="Home" options={{ animationEnabled: false }}>
        {(props) => <AuthenticatedStackTab {...props} logout={logout} />}
      </Stack.Screen>
      <Stack.Screen name="default" component={IndexStartupContainer} />
    </Stack.Navigator>
  )
}

const Stack = createStackNavigator()

// @refresh reset
const AuthenticationMainNavigator = () => {
  const { isAuthenticated } = useAuth()
  return (
    <Stack.Navigator headerMode={'none'}>
      {isAuthenticated ? (
        <Stack.Screen
          options={{ animationEnabled: false }}
          name="AuthenticatedStack"
          component={AuthenticatedStack}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={Auth.Login}
          options={{ animationEnabled: false }}
        />
      )}
    </Stack.Navigator>
  )
}

export default AuthenticationMainNavigator
