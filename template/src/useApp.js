import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import useApi from '@/Services/useApi'

export const useApp = ({ retry_max = 3 } = {}) => {
  const dispatchRedux = useDispatch()
  const { API } = useApi()
  const dispatch = React.useCallback(
    async function (dispatchAction, actionPayload = {}) {
      let retry_nb = 0
      let req = () => {}
      try {
        req = async () => {
          retry_nb += 1
          return dispatchRedux(
            dispatchAction({
              api: API(),
              ...actionPayload,
            }),
          )
        }
        req()
      } catch (error) {
        if (retry_nb < retry_max) {
          req()
        }
        throw error
      }
    },
    [dispatchRedux, API, retry_max],
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
    redux: { useSelector, dispatch: dispatchRedux, execute },
  }
}
