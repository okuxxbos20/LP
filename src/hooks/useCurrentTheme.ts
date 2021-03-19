import { useRecoilValue } from 'recoil'
import { currentThemeState } from '../state'
import { darkTheme, lightTheme } from '../style/theme'

export const useCurrentTheme = () => {
  const currentTheme = useRecoilValue(currentThemeState)
  if (currentTheme === 'light') {
    return lightTheme
  } else {
    return darkTheme
  }
}
