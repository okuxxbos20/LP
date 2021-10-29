import { FC } from 'react'
import styled from 'styled-components'
import { Footer, Header } from '../components/layer4'
import { useCurrentTheme } from '../hooks'

export const ItemOne: FC = () => {
  const theme = useCurrentTheme()
  return (
    <>
      <Header />
        <Main bg={theme.bg} text={theme.text}>
          <p>this is item 1.</p>
        </Main>
      <Footer />
    </>
  )
}

export default ItemOne

const Main = styled.main<{
  bg: string
  text: string
}>`
  background: ${(props) => props.bg};
  min-height: calc(100vh - 176px);
  color: ${(props) => props.text};
`
