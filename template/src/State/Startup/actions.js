// export const ACTION = async ({}) => {};
import { actions as themeActions } from '@/State/Theme'
import { actions as userActions } from '@/State/User'

export const launch = async ({ api }, { dispatch }) => {
	// Timeout to fake waiting some process
	// Remove it, or keep it if you want display a beautiful splash screen ;)
	await new Promise((resolve) => setTimeout(resolve, 1000))
	// Here we load the user 1 for example, but you can for example load the connected user
	await dispatch(userActions.getUser({ api, userId: 1 }))
	await dispatch(
		themeActions.setDefaultTheme({ theme: 'default', darkMode: null }),
	)
}
