import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'

export default ({
  onLayoutFinish = () => {},
  bgCol = 'white',
  bgColSafeArea1 = bgCol,
  bgColSafeArea2 = bgCol,
  children,
}) => {
  const [count, setCount] = React.useState(0)

  const onLayout = () => {
    setCount((i) => i + 1)
    if (count === 2) {
      onLayoutFinish()
    }
  }
  return (
    <>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: bgColSafeArea1 }}
        onLayout={onLayout}
      />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: bgColSafeArea2 }}
        onLayout={onLayout}
      >
        {children}
      </SafeAreaView>
    </>
  )
}
