import { atom } from 'recoil'

export const currentThemeState = atom<'light' | 'dark'>({
  key: 'CurrentTheme',
  default: 'dark',
})
