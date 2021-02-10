import { createRestyleFunction, all } from '@shopify/restyle'

import composeRestyleFunctions from '@shopify/restyle/dist/composeRestyleFunctions'

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
const allRestyleFunctions = composeRestyleFunctions([
  ...all,
  height,
  width,
  fSize,
])
export function createVariant({ property = 'variant', themeKey, defaults }) {
  const styleFunction = createRestyleFunction({
    property,
    themeKey,
  })
  const func = (props, { theme, dimensions }) => {
    const expandedProps = styleFunction.func(props, { theme, dimensions })[
      property
    ]

    const variantDefaults = theme[themeKey] ? theme[themeKey].defaults : {}

    if (!expandedProps && !defaults && !variantDefaults) return {}
    return allRestyleFunctions.buildStyle(
      { ...defaults, ...variantDefaults, ...expandedProps },
      {
        theme,
        dimensions,
      },
    )
  }
  return {
    property,
    themeKey,
    variant: true,
    func,
  }
}
