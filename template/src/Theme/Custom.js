import { createRestyleFunction } from '@shopify/restyle'

export const height = createRestyleFunction({
  property: 'h',
  styleProperty: 'height',
  transform: ({ value, theme, themeKey }) =>
    value
      ? Object.keys(theme[themeKey]).includes(value)
        ? theme[themeKey][value]
        : value
      : value,
  themeKey: 'spacing',
})
export const width = createRestyleFunction({
  property: 'w',
  styleProperty: 'width',
  transform: ({ value, theme, themeKey }) =>
    value
      ? Object.keys(theme[themeKey]).includes(value)
        ? theme[themeKey][value]
        : value
      : value,
  themeKey: 'spacing',
})

export const fSize = createRestyleFunction({
  property: 'fSize',
  styleProperty: 'fontSize',
  transform: ({ value, theme, themeKey }) =>
    value
      ? Object.keys(theme[themeKey]).includes(value)
        ? theme[themeKey][value]
        : value
      : value,
  themeKey: 'fontSizes',
})
