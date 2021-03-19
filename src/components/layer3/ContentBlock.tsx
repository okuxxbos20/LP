import { FC } from 'react'
import styled from 'styled-components'

export const ContentBlock: FC<{
  children: React.ReactElement
  color?: string
  bg: string
  height?: string
  padding?: string
  margin?: string
  opacity?: number
}> = ({
  children,
  color = '#000',
  bg,
  height = '300px',
  padding = '20px',
  margin = '0',
  opacity = 1,
}) => {
  return (
    <ContentWrapper
      color={color}
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
  color: string
  bg: string
  height: string
  padding: string
  margin: string
  opacity: number
}>`
  color: ${(props) => props.color};
  background: ${(props) => props.bg};
  width: 100%;
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  opacity: ${(props) => props.opacity};
`
