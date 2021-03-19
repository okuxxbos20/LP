import { FC } from 'react'
import styled from 'styled-components'
import { useCurrentTheme } from '../../hooks'

export const Footer: FC = () => {
  const theme = useCurrentTheme()
  return (
    <FooterWrapper bg={theme.bg}>
      <FooterContent color={theme.text} borderColor={theme.text}>
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
  color: string
  borderColor: string
}>`
  color: ${(props) => props.color};
  width: 80%;
  border-top: 1px solid ${(props) => props.borderColor};
  margin: 0 auto;
`
