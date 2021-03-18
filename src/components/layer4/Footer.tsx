import { FC } from 'react'
import styled from 'styled-components'

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <p>this is footer</p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  width: 80%;
  height: 300px;
  margin: 0 auto;
  border-top: 1px solid #aaa;
`
