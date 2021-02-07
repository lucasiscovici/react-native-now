import React from 'react'
import isEqual from 'lodash.isequal'

function deepCompareEquals(a, b) {
  return isEqual(a, b)
}

function useDeepCompareMemoize(value) {
  const ref = React.useRef()
  const signalRef = React.useRef(0)

  if (!deepCompareEquals(value, ref.current)) {
    ref.current = value
    signalRef.current += 1
  }

  return [signalRef.current]
}

export function useDeepCompareEffect(callback, dependencies) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useEffect(callback, useDeepCompareMemoize(dependencies))
}
