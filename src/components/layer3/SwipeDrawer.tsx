import { FC } from 'react'
import { ScrollTo } from 'react-scroll-to'
import { SwipeableDrawer } from '@material-ui/core/'
import { createStyles, makeStyles } from '@material-ui/styles'
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
      <DrawerInside>
        <ScrollTo>
          {({ scroll }) => (
            <>
              <Item
                onClick={() => onClickItem(scroll({ y: 200, smooth: true }))}
              >
                About Us
              </Item>
              <Item
                onClick={() => onClickItem(scroll({ y: 500, smooth: true }))}
              >
                Mission
              </Item>
              <Item
                onClick={() => onClickItem(scroll({ y: 800, smooth: true }))}
              >
                Contact
              </Item>
              <Item
                onClick={() => onClickItem(scroll({ y: 1100, smooth: true }))}
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

const DrawerInside = styled.div`
  background: transparent;
  padding: 10px 15px 40px;
`

const Item = styled.p`
  font-size: 20px;
  margin: 15px;
  width: 200px;
  transition: 200ms;
  /* background: pink; */
  &:hover {
    cursor: pointer;
  }
`
