export default (variables) => {
  const theme = {}

  theme.boxVariants = {
    colCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
  theme.textVariants = {}
  // theme.imageVariants = {}
  theme.buttonVariants = {}
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
  }
  return theme
}
