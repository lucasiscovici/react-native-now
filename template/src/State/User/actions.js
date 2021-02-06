// export const ACTION = async ({}) => {};
import { get } from '@/Services/User'

export const getUser = async ({ api, userId }) => get(api, userId)
