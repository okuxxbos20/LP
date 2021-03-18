import { FC } from 'react'
import styled from 'styled-components'

export const ContentBlock: FC<{
  children: React.ReactElement
  bg?: string
  height?: string
  padding?: string
  margin?: string
}> = ({
  children,
  bg = '#fff',
  height = '300px',
  padding = '20px',
  margin = '0',
}) => {
  return (
    <ContentWrapper bg={bg} height={height} padding={padding} margin={margin}>
      {children}
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div<{
  bg: string
  height: string
  padding: string
  margin: string
}>`
  background: ${(props) => props.bg};
  width: 100%;
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`
