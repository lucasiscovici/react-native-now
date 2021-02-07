/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */

export const Palette = {
  transparent: 'transparent',
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  googleGray: '#928b8c',
  black: '#0B0B0B',
  dark: '#000000',
  white: '#FFFFFF',
  gray: '#2d2a25',

  fbBlue: '#4267b2',
  red: 'red',

  redSalmon: '#E14032',
}

export const AppColors = {
  primary: Palette.redSalmon,
  secondary: Palette.white,
  success: Palette.greenLight,
  error: Palette.red,
  text: Palette.white,
  inputBackground: Palette.black,
}

export const NavigationColors = {
  primary: AppColors.primary,
}

export const Colors = { ...Palette, ...AppColors }

/**
 * FontSize
 */
export const FontSizes = {
  s: 8,
  m: 16,
  l: 24,
  xl: 40,
}
/**
 * Metrics Sizes
 */
const xxs = 2.5 // 2.5
const xs = xxs * 2 // 5
const s = xs * 2 // 10
const m = xs * 3 // 15
const l = m * 2 // 30
const xl = l + m // 45
const xxl = l + 2 * m // 60

export const Sizes = {
  1: xxs,
  2: xs,
  3: s,
  4: m,
  5: l,
  6: xl,
  7: xxl,
  xxs,
  xs,
  s,
  m,
  l,
  xl,
  xxl,
  max: '100%',
}

export const Breakpoints = {
  phone: 0,
  tablet: 768,
  largeTablet: 1024,
}
