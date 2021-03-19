import { FC } from 'react'
import { ScrollTo } from 'react-scroll-to'
import styled from 'styled-components'
import { breakpoints } from '../../style'

export const PcRightBox: FC = () => {
  return (
    <PcRightBoxWrapper>
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
    </PcRightBoxWrapper>
  )
}

const PcRightBoxWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
const Item = styled.p`
  margin: 0 10px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`
