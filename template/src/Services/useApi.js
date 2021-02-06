import React from 'react'
import axios from 'axios'
import { Config } from '@/Config'

export default () => {
  const [cache] = React.useState(new Map())
  const AuthAPI = React.useCallback(
    (token) => {
      if (cache.has(token)) {
        return cache.get(token)
      }
      const cached = axios.create({
        baseURL: Config.API_URL,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      cache.set(token, cached)
      return cached
    },
    [cache],
  )

  const api = React.useCallback(
    () =>
      axios.create({
        baseURL: Config.API_URL,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }),
    [],
  )

  return { AuthAPI, API: api }
}
