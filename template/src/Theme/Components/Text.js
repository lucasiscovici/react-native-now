import { textRestyleFunctions, createRestyleComponent } from '@shopify/restyle'
import { fSize } from '@/Theme/Custom'
import { Text as TextTN } from 'react-native'

const Text = createRestyleComponent([...textRestyleFunctions, fSize], TextTN)

export default Text
