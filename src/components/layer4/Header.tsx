import { FC } from 'react'
import { ScrollTo } from 'react-scroll-to'
import styled from 'styled-components'

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <p>Logo</p>
      <RightBox>
        <ScrollTo>
          {({ scroll }) => (
            <>
              <Item onClick={() => scroll({ y: 200, smooth: true })}>
                About Us
              </Item>
              <Item onClick={() => scroll({ y: 500, smooth: true })}>
                Mission
              </Item>
              <Item onClick={() => scroll({ y: 800, smooth: true })}>
                Contact
              </Item>
              <Item onClick={() => scroll({ y: 1100, smooth: true })}>
                Access
              </Item>
            </>
          )}
        </ScrollTo>
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
