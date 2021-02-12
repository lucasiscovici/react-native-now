import 'react-native-gesture-handler'
import './Translations'
import { config } from './Services'
import { Config } from './Config'
import React from 'react'
import { ThemeProvider, useGlobalTheme } from '@/Theme'
import { Provider } from '@/State/store.js'
import { ApplicationNavigator } from '@/Navigators'

const AppWithState = () => {
  const theme = useGlobalTheme()
  return (
    <ThemeProvider theme={theme}>
      {Config?.auth ?? false ? (
        <config.AuthProvider>
          <ApplicationNavigator />
        </config.AuthProvider>
      ) : (
        <ApplicationNavigator />
      )}
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
