import { createTheme, useTheme, ThemeProvider } from '@shopify/restyle'
import themes from './themes'
import { selectors as themeSelectors } from '@/State/Theme'
import { useColorScheme } from 'react-native-appearance'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import Variants from '@/Theme/Variants'
import Images from '@/Theme/Images'
import * as DefaultVariables from '@/Theme/Variables'
import React from 'react'

const useGlobalTheme = () => {
  // Get the scheme device
  const colorScheme = useColorScheme()

  // Get current theme from the store
  const currentTheme = themeSelectors.getTheme() // useSelector((state) => state.theme.theme || 'default')

  const isDark = themeSelectors.isDarkMode()

  const darkMode = isDark === null ? colorScheme === 'dark' : isDark
  //Select the right theme light theme ({} if not exist)
  const { Variables: themeConfigVars = {}, ...themeConfig } =
    themes?.[currentTheme]?.[currentTheme] ?? {}

  const { Variables: darkThemeConfigVars = {}, ...darkThemeConfig } = darkMode
    ? themes?.[currentTheme]?.[`${currentTheme}_dark`] || {}
    : {}

  const themeVariables = React.useCallback(
    () =>
      mergeVariables(DefaultVariables, themeConfigVars, darkThemeConfigVars),
    [themeConfigVars, darkThemeConfigVars],
  )()

  // Build the default theme
  const baseTheme = React.useCallback(
    () => ({
      Variants: Variants(themeVariables),
      Images: Images(themeVariables),
      ...themeVariables,
    }),
    [themeVariables],
  )()

  // Merge and return the current Theme
  const finalTheme = React.useCallback(
    () =>
      buildTheme(
        darkMode,
        baseTheme,
        formatTheme(themeVariables, themeConfig || {}),
        formatTheme(themeVariables, darkThemeConfig || {}),
      ),
    [darkMode, baseTheme, themeVariables, themeConfig, darkThemeConfig],
  )()

  return React.useCallback(
    () =>
      createTheme({
        ...finalTheme,
        colors: finalTheme?.Colors ?? {},
        fontSizes: finalTheme?.FontSizes ?? {},
        breakpoints: finalTheme?.Breakpoints ?? {},
        spacing: finalTheme?.Sizes ?? {},
        ...(finalTheme?.Variants ?? {}),
      }),
    [finalTheme],
  )()
}

/**
 * Generate Theme with theme variables
 *
 * @param variables
 * @param theme
 * @return {{}|{[p: string]: *}}
 */
const formatTheme = (variables, theme) => {
  return Object.entries(theme).reduce((acc, [name, generate]) => {
    return {
      ...acc,
      [name]: generate(variables),
    }
  }, {})
}

/**
 * Merge all variables for building the theme
 * baseTheme <- currentTheme <- currentDarkTheme
 *
 * @param variables : {MetricsSizes?: {small: number, large: number, tiny: number, regular: number}, NavigationColors?: {primary: string}, FontSize?: {small: number, large: number, regular: number}, Colors?: {white: string, success: string, text: string, error: string, transparent: string, primary: string}} variables from @Theme/Variables
 * @param themeConfig : currentTheme form @Theme/themes
 * @param darkThemeConfig : currentDarkTheme from @Theme/themes
 * @return {{}|{[p: string]: *}}
 */
const mergeVariables = (variables, themeConfig, darkThemeConfig) =>
  Object.entries(variables).reduce((acc, [group, vars]) => {
    return {
      ...acc,
      [group]: {
        ...vars,
        ...(themeConfig[group] || {}),
        ...(darkThemeConfig[group] || {}),
      },
    }
  }, {})

/**
 * Provide all the theme exposed with useTheme()
 *
 * @param darkMode : boolean
 * @param baseTheme
 * @param themeConfig
 * @param darkThemeConfig
 * @return {{[p: string]: *, NavigationTheme: {colors}, darkMode: *}}
 */
const buildTheme = (darkMode, baseTheme, themeConfig, darkThemeConfig) => {
  return {
    ...mergeTheme(baseTheme, themeConfig, darkThemeConfig),
    darkMode,
    NavigationTheme: mergeNavigationTheme(
      darkMode ? DarkTheme : DefaultTheme,
      baseTheme.NavigationColors,
    ),
  }
}

/**
 * Merge theme from baseTheme <- currentTheme <- currentDarkTheme
 *
 * @param baseTheme
 * @param theme
 * @param darkTheme
 * @return {{[p: string]: *}}
 */
const mergeTheme = (baseTheme, theme, darkTheme) => ({
  ...Object.entries(baseTheme).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: {
        ...value,
        ...(theme[key] || {}),
        ...(darkTheme[key] || {}),
      },
    }),
    {},
  ),
})

/**
 * Merge the React Navigation Theme
 *
 * @param reactNavigationTheme
 * @param overrideColors
 * @return {{colors}}
 */
const mergeNavigationTheme = (reactNavigationTheme, overrideColors) => ({
  ...reactNavigationTheme,
  colors: {
    ...reactNavigationTheme.colors,
    ...overrideColors,
  },
})

export { useTheme, useGlobalTheme, ThemeProvider }
export * from './Components'
