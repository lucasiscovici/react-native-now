import { textRestyleFunctions, createRestyleComponent } from '@shopify/restyle'
import { fSize } from '@/Theme/Custom'
import { TextInput as TextTN } from 'react-native'
import { createVariant } from '@shopify/restyle'

const variant = createVariant({ themeKey: 'textInputVariants' })
const TextInput = createRestyleComponent(
	[...textRestyleFunctions.filter((tx) => !tx?.variant), fSize, variant],
	TextTN,
)

export default TextInput
