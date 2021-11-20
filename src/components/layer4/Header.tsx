import { FC, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { PcRightBox, SpRightBox, SwipeDrawer } from '../layer3'
import { useCurrentTheme } from '../../hooks'

export const Header: FC = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false)
  const theme = useCurrentTheme()
  return (
    <HeaderWrapper bg={theme.bg} text={theme.text}>
      <Link href='/'>
        <p>Logo</p>
      </Link>
      <PcRightBox />
      <SpRightBox setIsSideMenuOpen={setIsSideMenuOpen} />
      <SwipeDrawer
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div<{
  bg: string
  text: string
}>`
  background: ${(props) => props.bg};
  color: ${(props) => props.text};
  width: 100%;
  height: 50px;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
