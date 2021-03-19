import { FC, useState } from 'react'
import styled from 'styled-components'
import { PcRightBox, SpRightBox, SwipeDrawer } from '../layer3'

export const Header: FC = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false)
  console.log(isSideMenuOpen)
  return (
    <HeaderWrapper>
      <p>Logo</p>
      <PcRightBox />
      <SpRightBox setIsSideMenuOpen={setIsSideMenuOpen} />
      <SwipeDrawer
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  background: #fff;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
`
