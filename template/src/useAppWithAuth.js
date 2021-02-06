import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useApi from '@/Services/useApi'
import { useAuth, useAxiosInterceptor } from '@/auth'

export const useApp = ({ retry_max = 3 } = {}) => {
  const dispatchRedux = useDispatch()
  const {
    loginWithBackend,
    getAccessTokenSilently,
    isAuthenticated,
    isLoading,
    logout,
  } = useAuth()
  const { AuthAPI } = useApi()
  const axiosInterceptor = useAxiosInterceptor()
  const dispatch = React.useCallback(
    async function (dispatchAction, actionPayload = {}) {
      let retry_nb = 0
      let req = () => {}
      try {
        req = async () => {
          retry_nb += 1
          const accessToken = await getAccessTokenSilently()
          if (accessToken) {
            return dispatchRedux(
              dispatchAction({
                api: axiosInterceptor(AuthAPI(accessToken)),
                ...actionPayload,
              }),
            )
          }
        }
        req()
      } catch (error) {
        if (error?.message === 'AUTH: RETRY') {
          if (retry_nb < retry_max) {
            req()
          }
        }
        throw error
      }
    },
    [
      dispatchRedux,
      getAccessTokenSilently,
      axiosInterceptor,
      AuthAPI,
      retry_max,
    ],
  )
  const execute = React.useCallback(
    async function (dispatchAction, actionPayload = {}) {
      try {
        return dispatchRedux(
          dispatchAction({
            ...actionPayload,
          }),
        )
      } catch (error) {
        throw error
      }
    },
    [dispatchRedux],
  )
  return {
    api: { dispatch, execute },
    auth: { isAuthenticated, isLoading, logout, loginWithBackend },
    redux: { useSelector, dispatch: dispatchRedux, execute },
  }
}
