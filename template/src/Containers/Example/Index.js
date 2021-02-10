import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { Brand } from '@/Components'
import { useTranslation } from 'react-i18next'
import { actions as ThemeActions } from '@/State/Theme'

import {
  actions as userActions,
  selectors as userSelectors,
} from '@/State/User'

import { Box, Text, TextInput, Button, useTheme } from '@/Theme'

import { useAuth } from '@/Services/Auth'

import SafeAreaView2 from '@/Components/SafeAreaView2'
const IndexExampleContainer = () => {
  const { t } = useTranslation()

  const user = userSelectors.get()
  const isLoading = userSelectors.isPending()
  const error = userSelectors.getError()

  const { logout } = useAuth()

  const theme = useTheme()

  const [userId, setUserId] = useState('1')

  const fetch = (id) => {
    setUserId(id)
    if (`${id}`.length > 0) {
      userActions.getUser({ userId: id })
    }
  }

  const changeTheme = async ({ darkMode }) =>
    ThemeActions.changeTheme({ theme, darkMode })

  return (
    <SafeAreaView2 bgCol={theme.Colors.purpleDark}>
      <Box flex={1} variant="colCenter" backgroundColor="purpleDark">
        <Box flex={1} variant="colCenter" px="s" backgroundColor="purpleDark">
          <Box variant="colCenter" px="s">
            <Brand />
            {isLoading && <ActivityIndicator />}
            {error ? (
              <Text fSize="m">{error}</Text>
            ) : (
              <Text fSize="m" textAlign="center">
                {t('example.helloUser', { name: `\n${user?.name ?? ''}` })}
              </Text>
            )}
          </Box>
          <Box
            flexDirection="column"
            alignItems="center"
            px="s"
            py="s"
            my="l"
            backgroundColor="primary"
            borderRadius={5}
          >
            <Text textAlign="center">{t('example.labels.userId')}</Text>
            <TextInput
              variant="home"
              onChangeText={(text) => fetch(text)}
              editable={!isLoading}
              keyboardType={'number-pad'}
              maxLength={2}
              value={userId}
              selectTextOnFocus
              px="s"
            />
          </Box>
          <Text fSize="m">DarkMode :</Text>
          <Button
            onPress={() => changeTheme({ darkMode: null })}
            title="Auto"
            borderColor={'black'}
            borderWidth={1}
            alignItems="center"
            w="xxl"
          />
          <Button
            onPress={() => changeTheme({ darkMode: true })}
            title="Dark"
            borderColor={'white'}
            borderWidth={1}
            alignItems="center"
            w="xxl"
            backgroundColor="black"
            textProps={{ color: 'primary' }}
          />
          <Button
            onPress={() => changeTheme({ darkMode: false })}
            title="Light"
            borderColor={'black'}
            borderWidth={1}
            alignItems="center"
            w="xxl"
          />
        </Box>
        <Box flex={0} backgroundColor="red" justifyContent="flex-end">
          <Button variant="primary" title="logout" onPress={() => logout()} />
        </Box>
      </Box>
    </SafeAreaView2>
  )
}

export default IndexExampleContainer
