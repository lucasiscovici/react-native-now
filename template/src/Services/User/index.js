// export { default as FetchOneUserService } from './FetchOne'

export const get = async (api, userId) => {
  if (!userId) {
    throw new Error('User ID is required')
  }
  const response = await api.get(`users/${userId}`)
  return response.data
}
