import { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useCurrentTheme } from '@/hooks'

export const Footer: FC = () => {
  const theme = useCurrentTheme()
  const footerItems = [
    { label: 'item1', link: '/item1' },
    { label: 'item2', link: '/item2' },
    { label: 'item3', link: '/item3' },
  ]
  return (
    <FooterWrapper bg={theme.bg}>
      <FooterContent color={theme.text} borderColor={theme.text}>
        {footerItems.map((item: { label: string; link: string }) => {
          return (
            <Link href={item.link} key={item.label}>
              <FooterItem>{item.label}</FooterItem>
            </Link>
          )
        })}
      </FooterContent>
      <Rights color={theme.text}>
        {new Date().getFullYear()} All Right Reserved.
      </Rights>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div<{
  bg: string
}>`
  background: ${(props) => props.bg};
  width: 100%;
  margin: 0 auto;
`

const FooterContent = styled.div<{
  color: string
  borderColor: string
}>`
  color: ${(props) => props.color};
  width: 80%;
  border-top: 1px solid ${(props) => props.borderColor};
  padding: 20px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

const FooterItem = styled.p`
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`

const Rights = styled.p<{
  color: string
}>`
  color: ${(props) => props.color};
  font-size: 12px;
  padding: 20px 0;
  text-align: center;
`
