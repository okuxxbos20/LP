import { FC } from 'react'
import { Slide } from 'react-reveal'
import styled from 'styled-components'

export const ContentBlock: FC<{
  bg?: string
  height?: string
  padding?: string
  margin?: string
}> = ({ bg = '#fff', height = '300px', padding = '20px', margin = '0' }) => {
  return (
    <ContentWrapper bg={bg} height={height} padding={padding} margin={margin}>
      <Slide left>
        <h1>Something</h1>
      </Slide>
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
