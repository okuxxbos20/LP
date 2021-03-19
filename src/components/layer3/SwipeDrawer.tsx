import { FC } from 'react'
import { ScrollTo } from 'react-scroll-to'
import { SwipeableDrawer } from '@material-ui/core/'
import { createStyles, makeStyles } from '@material-ui/styles'
import { useCurrentTheme } from '../../hooks'
import styled from 'styled-components'

const useStyles = makeStyles(() =>
  createStyles({
    drawerPaper: {
      borderRadius: '0',
    },
  })
)

export const SwipeDrawer: FC<{
  isSideMenuOpen: boolean
  setIsSideMenuOpen: (move: boolean) => void
}> = ({ isSideMenuOpen, setIsSideMenuOpen }) => {
  const iOS: boolean =
    process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const moveDrawer = (move: boolean): void => {
    setIsSideMenuOpen(move)
  }
  const onClickItem = (scrollFunc: void) => {
    scrollFunc
    moveDrawer(false)
  }
  const currentTheme = useCurrentTheme()
  const classes = useStyles()
  return (
    <SwipeableDrawer
      open={isSideMenuOpen}
      onOpen={() => moveDrawer(true)}
      onClose={() => moveDrawer(false)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      anchor="right"
      classes={{ paper: classes.drawerPaper }}
    >
      <DrawerInside bg={currentTheme.bg} text={currentTheme.text}>
        <ScrollTo>
          {({ scroll }) => (
            <>
              <Item
                onClick={() => onClickItem(scroll({ y: 200, smooth: true }))}
                bg={currentTheme.bg}
                text={currentTheme.text}
              >
                About Us
              </Item>
              <Item
                onClick={() => onClickItem(scroll({ y: 500, smooth: true }))}
                bg={currentTheme.bg}
                text={currentTheme.text}
              >
                Mission
              </Item>
              <Item
                onClick={() => onClickItem(scroll({ y: 800, smooth: true }))}
                bg={currentTheme.bg}
                text={currentTheme.text}
              >
                Contact
              </Item>
              <Item
                onClick={() => onClickItem(scroll({ y: 1100, smooth: true }))}
                bg={currentTheme.bg}
                text={currentTheme.text}
              >
                Access
              </Item>
            </>
          )}
        </ScrollTo>
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
  bg: string
  text: string
}>`
  color: ${(props) => props.text};
  background: ${(props) => props.bg};
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
