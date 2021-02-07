import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'

import { actions as startupActions } from '@/State/Startup'

import { Box, Text } from '@/Theme'

const IndexStartupContainer = () => {
  const { t } = useTranslation()

  useEffect(() => {
    startupActions.launch()
  }, [])

  return (
    <Box variant="colCenter" flex={1}>
      <Brand />
      <ActivityIndicator size="large" my="l" />
      <Text textAlign="center">{t('welcome')}</Text>
    </Box>
  )
}

export default IndexStartupContainer
