import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { Brand } from '@/Components'
import { useTranslation } from 'react-i18next'
import { actions as ThemeActions } from '@/State/Theme'

import {
  actions as userActions,
  selectors as userSelectors,
} from '@/State/User'

import { useApp } from '@/useApp'

import { Box, Text, TextInput, Button } from '@/Theme'

const IndexExampleContainer = () => {
  const { t } = useTranslation()
  const {
    api: { dispatch, execute },
  } = useApp()

  const user = userSelectors.get()
  const fetchOneUserLoading = userSelectors.isPending()

  const error = userSelectors.getError()

  const [userId, setUserId] = useState('1')

  const fetch = (id) => {
    setUserId(id)
    if (`${id}`.length > 0) {
      dispatch(userActions.getUser, { userId: id })
    }
  }

  const changeTheme = async ({ theme, darkMode }) =>
    execute(ThemeActions.changeTheme, { theme, darkMode })

  return (
    <Box flex={1} variant="colCenter" px="s">
      <Box variant="colCenter" px="s">
        <Brand />
        {fetchOneUserLoading && <ActivityIndicator />}
        {error ? (
          <Text fSize="m">{error}</Text>
        ) : (
          <Text fSize="m">{t('example.helloUser', { name: user?.name })}</Text>
        )}
      </Box>
      <Box
        flexDirection="row"
        alignItems="center"
        px="s"
        my="l"
        backgroundColor="primary"
      >
        <Text textAlign="center">{t('example.labels.userId')}</Text>
        <TextInput
          variant="home"
          flex={1}
          onChangeText={(text) => fetch(text)}
          editable={!fetchOneUserLoading}
          keyboardType={'number-pad'}
          maxLength={2}
          value={userId}
          selectTextOnFocus
        />
      </Box>
      <Text fSize="m">DarkMode :</Text>
      <Button onPress={() => changeTheme({ darkMode: null })} title="Auto" />
      <Button onPress={() => changeTheme({ darkMode: true })} title="Dark" />
      <Button onPress={() => changeTheme({ darkMode: false })} title="Light" />
    </Box>
  )
}

export default IndexExampleContainer
