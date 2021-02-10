import {
  textRestyleFunctions,
  createRestyleComponent,
  spacing,
} from '@shopify/restyle'
import { fSize } from '@/Theme/Custom'
import { TextInput as TextTN } from 'react-native'
import { all } from '@shopify/restyle'
import { height, width, createVariant } from '@/Theme/Custom'
const variant = createVariant({ themeKey: 'textInputVariants' })
const TextInput = createRestyleComponent(
  [
    ...all,
    ...textRestyleFunctions.filter((tx) => !tx?.variant),
    fSize,
    height,
    spacing,
    width,
    variant,
  ],
  TextTN,
)

export default TextInput
