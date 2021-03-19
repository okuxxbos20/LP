import { FC } from 'react'
import { Slide } from 'react-reveal'
import { ContentBlock } from '../components/layer3'
import { Footer, Header } from '../components/layer4'
import { useCurrentTheme } from '../hooks'

const IndexPage: FC = () => {
  const currentTheme = useCurrentTheme()
  return (
    <>
      <Header />
      <ContentBlock
        bg={currentTheme.bg}
        padding="50px 20px 20px"
        height="250px"
      >
        <h1>TITLE IS HEAR</h1>
      </ContentBlock>
      <ContentBlock bg={currentTheme.bg} opacity={0.75}>
        <Slide left>
          <h3>About Us</h3>
        </Slide>
      </ContentBlock>
      <ContentBlock bg={currentTheme.bg}>
        <Slide left>
          <h3>Mission</h3>
        </Slide>
      </ContentBlock>
      <ContentBlock bg={currentTheme.bg} opacity={0.75}>
        <Slide left>
          <h3>Contact</h3>
        </Slide>
      </ContentBlock>
      <ContentBlock bg={currentTheme.bg}>
        <Slide left>
          <h3>Access</h3>
        </Slide>
      </ContentBlock>
      <Footer />
    </>
  )
}

export default IndexPage
