import { FC } from 'react'
import styled from 'styled-components'

export const ContentBlock: FC<{
  children: React.ReactElement
  bg: string
  height?: string
  padding?: string
  margin?: string
  opacity?: number
}> = ({
  children,
  bg,
  height = '300px',
  padding = '20px',
  margin = '0',
  opacity = 1,
}) => {
  return (
    <ContentWrapper
      bg={bg}
      height={height}
      padding={padding}
      margin={margin}
      opacity={opacity}
    >
      {children}
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div<{
  bg: string
  height: string
  padding: string
  margin: string
  opacity: number
}>`
  background: ${(props) => props.bg};
  width: 100%;
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  opacity: ${(props) => props.opacity};
`
