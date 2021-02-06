import { createRestyleComponent, createVariant } from '@shopify/restyle'
import { Image as ImageRN } from 'react-native'
import { height, width } from '@/Theme/Custom'

const variant = createVariant({ themeKey: 'imageVariants' })
const Image = createRestyleComponent([height, width, variant], ImageRN)

export default Image
