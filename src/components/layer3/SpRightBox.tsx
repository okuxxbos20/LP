import { FC } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../style'

type Drawer = (move: boolean) => void

export const SpRightBox: FC<{ setIsSideMenuOpen: Drawer }> = ({
  setIsSideMenuOpen,
}) => {
  return (
    <SpRightBoxWrapper
      role="button"
      tabIndex={0}
      onClick={() => setIsSideMenuOpen(true)}
      onKeyDown={() => setIsSideMenuOpen(true)}
    >
      <HamburgerBorder />
    </SpRightBoxWrapper>
  )
}

const SpRightBoxWrapper = styled.div`
  display: none;
  @media (max-width: ${breakpoints.tablet}) {
    background: transparent;
    display: grid;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 5px;
    position: relative;
    transition: 200ms;
    &:hover {
      cursor: pointer;
      background: rgba(229, 231, 233, 0.8);
    }
    &:focus {
      outline: none;
    }
  }
`

const HamburgerBorder = styled.span`
  background: #111;
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
    background: #111;
    width: 18px;
    height: 2px;
    position: absolute;
    top: calc(50% - 6px);
  }
  &:after {
    content: '';
    background: #111;
    width: 18px;
    height: 2px;
    position: absolute;
    top: calc(50% + 4px);
  }
`
