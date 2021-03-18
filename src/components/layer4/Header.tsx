import { FC } from 'react'
import styled from 'styled-components'

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <p>Logo</p>
      <RightBox>
        <Item>item</Item>
        <Item>item</Item>
        <Item>item</Item>
      </RightBox>
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

const RightBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Item = styled.p`
  margin: 0 10px;
  &:hover {
    cursor: pointer;
  }
`
