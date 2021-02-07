import { boxRestyleFunctions } from '@shopify/restyle'
import { createRestyleComponent, createVariant } from '@shopify/restyle'
import { View } from 'react-native'
import { height, width } from '@/Theme/Custom'

const variant = createVariant({ themeKey: 'boxVariants' })
const Box = createRestyleComponent(
  [...boxRestyleFunctions, height, width, variant],
  View,
)

export default Box
