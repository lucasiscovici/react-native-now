import 'react-native-gesture-handler'
import './Translations'
import './Services'
import React from 'react'
import { ThemeProvider, useGlobalTheme } from '@/Theme'
import { Provider } from '@/State/store.js'
import { ApplicationNavigator } from '@/Navigators'

const AppWithState = () => {
  const theme = useGlobalTheme()
  return (
    <ThemeProvider theme={theme}>
      <ApplicationNavigator />
    </ThemeProvider>
  )
}

const App = () => {
  return (
    <Provider>
      <AppWithState />
    </Provider>
  )
}

export default App
