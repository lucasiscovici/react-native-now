/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { Palette } from '../../../Variables'

/**
 * Colors
 */

export const AppColors = {
  primary: Palette.white,
  secondary: Palette.black,
  success: Palette.red,
  error: Palette.greenLight,
}

export const NavigationColors = {
  primary: AppColors.primary,
}

export const Colors = { ...AppColors }
