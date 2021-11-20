import { FC } from 'react'
import styled from 'styled-components'
import { breakpoints } from '@/style'
import { useCurrentTheme } from '@/hooks'

type Drawer = (move: boolean) => void

export const SpRightBox: FC<{ setIsSideMenuOpen: Drawer }> = ({
  setIsSideMenuOpen,
}) => {
  const theme = useCurrentTheme()
  return (
    <SpRightBoxWrapper
      role="button"
      tabIndex={0}
      onClick={() => setIsSideMenuOpen(true)}
      onKeyDown={() => setIsSideMenuOpen(true)}
      bg={theme.bg}
    >
      <HamburgerBorder borderColor={theme.text} />
    </SpRightBoxWrapper>
  )
}

const SpRightBoxWrapper = styled.div<{
  bg: string
}>`
  display: none;
  @media (max-width: ${breakpoints.tablet}) {
    background: ${(props) => props.bg};
    display: grid;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 5px;
    position: relative;
    transition: 200ms;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
    &:focus {
      outline: none;
    }
  }
`

const HamburgerBorder = styled.span<{
  borderColor: string
}>`
  background: ${(props) => props.borderColor};
  width: 18px;
  height: 2px;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  &:before {
    content: '';
    background: ${(props) => props.borderColor};
    width: 18px;
    height: 2px;
    position: absolute;
    top: calc(50% - 6px);
  }
  &:after {
    content: '';
    background: ${(props) => props.borderColor};
    width: 18px;
    height: 2px;
    position: absolute;
    top: calc(50% + 4px);
  }
`
