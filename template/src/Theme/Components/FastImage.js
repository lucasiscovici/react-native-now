import FastImage from 'react-native-fast-image'
import { createRestyleComponent } from '@shopify/restyle'
import { height, width, createVariant } from '@/Theme/Custom'

const variant = createVariant({ themeKey: 'imageVariants' })
const Image = createRestyleComponent([height, width, variant], FastImage)

export default Image
