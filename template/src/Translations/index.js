import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as resourcesOriginal from './resources'
import { getLocales } from 'react-native-localize'
import moment from 'moment'

const resources = Object.fromEntries(
	Object.entries(resourcesOriginal).map(([k, v]) => [
		k.replace('_', '-'),
		{ translation: v },
	]),
)
const defaultLocalization = Object.keys(resources)[0]

i18n.use(initReactI18next).init({
	resources,
	fallbackLng: 'en',
	lng: getLocales()?.[0]?.languageTag,
	debug: true,
	interpolation: {
		escapeValue: false, // not needed for react as it does escape per default to prevent xss!
	},
})

i18n.on('languageChanged', (lng) => {
	moment.locale(lng.slice(0, 2))
})

export { i18n, defaultLocalization }
export default i18n
