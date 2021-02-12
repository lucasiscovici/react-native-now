import React from 'react'
import { Box, Text, Button, TextInput } from '@/Theme'
import { useAuth } from '@/Services/Auth'
import { SafeAreaView2, KeyboardAvoidingViewTouchable } from '@/Components'

const Login = (props) => {
  const { loginWithUsernamePassword } = useAuth()
  const [error, setError] = React.useState(null)
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const tiRef = React.useRef(null)

  React.useEffect(() => {
    tiRef.current?.focus()
  }, [])

  const onClick = () => {
    if (username.length > 0 && password.length > 0) {
      try {
        loginWithUsernamePassword(username, password)
      } catch (e) {
        console.log(e)
        setError(e)
      }
    }
  }
  return (
    <SafeAreaView2>
      <KeyboardAvoidingViewTouchable>
        <Box flex={1} variant="colCenter" px="s">
          <Text variant="title" mb="auto" flex={0}>
            Login
          </Text>
          <Box w="max" px={6} flex={1} variant="colCenter">
            <TextInput
              variant="login"
              placeholder="Username"
              autofocus={true}
              ref={tiRef}
              onChangeText={(text) => setUsername(text)}
            />

            <TextInput
              variant="login"
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
            />
            <Button
              variant="primary"
              title="Connexion"
              onPress={onClick}
              mt="s"
            />
          </Box>
          {error && <Text color="red">{error}</Text>}
        </Box>
      </KeyboardAvoidingViewTouchable>
    </SafeAreaView2>
  )
}

export default Login
