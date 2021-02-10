import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IndexExampleContainer } from '@/Containers'

import {
  actions as userActions,
  // selections as userSelectors,
} from '@/State/User'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  React.useEffect(() => {
    // meActions.getMe()
    userActions.getUser({ userId: 1 })
  }, [])

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={IndexExampleContainer} />
    </Tab.Navigator>
  )
}

export default MainNavigator
