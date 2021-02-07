import React from 'react'
import { useTheme, Box, Image } from '@/Theme'

const Brand = ({ height = 200, width = 200, mode = 'contain' }) => {
  const theme = useTheme()
  const { Images } = theme

  return (
    <Box style={{ height, width }}>
      <Image w="max" h="max" source={Images?.logo} resizeMode={mode} />
    </Box>
  )
}

export default Brand
