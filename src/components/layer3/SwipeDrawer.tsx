import { FC } from 'react'
import { ScrollTo } from 'react-scroll-to'
import { Switch, SwipeableDrawer } from '@material-ui/core/'
import { useCurrentTheme } from '../../hooks'
import styled from 'styled-components'
import { InstagramIcon, TwitterIcon } from '../icons'
import { useRecoilState } from 'recoil'
import { currentThemeState } from '../../state'

export const SwipeDrawer: FC<{
  isSideMenuOpen: boolean
  setIsSideMenuOpen: (move: boolean) => void
}> = ({ isSideMenuOpen, setIsSideMenuOpen }) => {
  // iOS or not
  const iOS: boolean =
    process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  // open and close drawer
  const moveDrawer = (move: boolean): void => {
    setIsSideMenuOpen(move)
  }

  // scroll when item is clicked
  const onClickItem = (scrollFunc: void) => {
    scrollFunc
    moveDrawer(false)
  }

  // change color mode
  const theme = useCurrentTheme()
  const [currentTheme, setCurrentTheme] = useRecoilState<'light' | 'dark'>(
    currentThemeState
  )

  return (
    <SwipeableDrawer
      open={isSideMenuOpen}
      onOpen={() => moveDrawer(true)}
      onClose={() => moveDrawer(false)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      anchor="right"
    >
      <DrawerInside bg={theme.bg} text={theme.text}>
        <ScrollTo>
          {({ scroll }) => (
            <>
              {[
                { scroll: 200, label: 'About Us' },
                { scroll: 500, label: 'Mission' },
                { scroll: 800, label: 'Contact' },
                { scroll: 1100, label: 'Access' },
              ].map((item: { scroll: number; label: string }) => {
                return (
                  <Item
                    onClick={() => onClickItem(scroll({ y: item.scroll, smooth: true }))}
                    text={theme.text}
                    key={item.label}
                  >
                    {item.label}
                  </Item>
                )
              })}
            </>
          )}
        </ScrollTo>
        <SnsPlace borderColor={theme.text}>
          <InstagramIcon
            link="https://www.instagram.com/instagram/"
            color={theme.text}
          />
          <TwitterIcon link="https://twitter.com/Twitter" color={theme.text} />
        </SnsPlace>
        <SwitchWrapper borderColor={theme.text}>
          <p>dark</p>
          <Switch
            checked={currentTheme === 'light' ? true : false}
            onChange={() =>
              currentTheme === 'light'
                ? setCurrentTheme('dark')
                : setCurrentTheme('light')
            }
          />
          <p>light</p>
        </SwitchWrapper>
      </DrawerInside>
    </SwipeableDrawer>
  )
}

const DrawerInside = styled.div<{
  bg: string
  text: string
}>`
  color: ${(props) => props.text};
  background: ${(props) => props.bg};
  height: 100%;
  padding: 10px 0;
`

const Item = styled.p<{
  text: string
}>`
  color: ${(props) => props.text};
  font-size: 20px;
  padding-left: 20px;
  margin: 15px 0;
  width: 200px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    padding-left: 15px;
  }
`

const SnsPlace = styled.div<{
  borderColor: string
}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  margin-top: 30px;
  border-top: 1px solid ${(props) => props.borderColor};
`

const SwitchWrapper = styled.div<{
  borderColor: string
}>`
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid ${(props) => props.borderColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
