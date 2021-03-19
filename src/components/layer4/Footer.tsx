import { FC } from 'react'
import styled from 'styled-components'
import { useCurrentTheme } from '../../hooks'

export const Footer: FC = () => {
  const currentTheme = useCurrentTheme()
  return (
    <FooterWrapper bg={currentTheme.bg}>
      <FooterContent borderColor={currentTheme.text}>
        this is footer.
      </FooterContent>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div<{
  bg: string
}>`
  background: ${(props) => props.bg};
  width: 100%;
  height: 300px;
  margin: 0 auto;
`

const FooterContent = styled.div<{
  borderColor: string
}>`
  width: 80%;
  border-top: 1px solid ${(props) => props.borderColor};
  margin: 0 auto;
`
