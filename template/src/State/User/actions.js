// export const ACTION = async ({}) => {};
import { userApi } from '@/Services/Api/User'

export const getUser = async ({ userId }) => userApi.get({ userId })
