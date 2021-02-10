export default (variables) => {
  const theme = {}

  theme.boxVariants = {
    colCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
  theme.textVariants = {
    title: {
      fSize: 'xl',
    },
  }
  // theme.imageVariants = {}
  theme.buttonVariants = {
    primary: {
      borderColor: 'black',
      textAlign: 'center',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // p: '',
      p: 's',
    },
  }
  theme.textInputVariants = {
    home: {
      borderWidth: 1,
      borderColor: 'text',
      backgroundColor: 'primary',
      color: 'text',
      minHeight: 50,
      textAlign: 'center',
      marginTop: 's',
      marginBottom: 's',
    },
    login: {
      textAlign: 'center',
      w: 'max',
      autoCapitalize: 'none',
      borderColor: 'gray',
      borderWidth: 1,
      my: 'xs',
      h: 'l',
    },
  }
  return theme
}
