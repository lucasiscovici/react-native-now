import { textRestyleFunctions, createRestyleComponent } from '@shopify/restyle'
import { fSize, createVariant } from '@/Theme/Custom'
import { Text as TextTN } from 'react-native'

const Text = createRestyleComponent(
  [
    ...textRestyleFunctions.filter((func) => !func.variant),
    fSize,
    createVariant({ themeKey: 'textVariants' }),
  ],
  TextTN,
)

export default Text
