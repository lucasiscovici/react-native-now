import FastImage from 'react-native-fast-image'
import { Image } from 'react-native'
import { zip } from '@/Utils'
// Convert image refs into image objects with Image.resolveAssetSource
export function preloadImages(images) {
  const uris = Object.values(images ?? {}).map((image) => ({
    uri: Image.resolveAssetSource(image).uri,
  }))

  FastImage.preload(uris)
  return zip(Object.keys(images), uris)
}
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function () {
  return preloadImages({
    logo: require('@/Assets/Images/TOM.png'),
  })
}
