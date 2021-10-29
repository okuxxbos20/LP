import { useRecoilValue } from 'recoil'
import { currentThemeState } from '../state'
import { darkTheme, lightTheme } from '../style/theme'

export const useCurrentTheme = () => {
  const currentTheme = useRecoilValue(currentThemeState)
  return currentTheme === 'light' ? lightTheme : darkTheme
}
