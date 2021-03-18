import { Slide } from 'react-reveal'
import { ContentBlock } from '../components/layer3'
import { Footer, Header } from '../components/layer4'

const IndexPage = () => (
  <>
    <Header />
    <ContentBlock padding="50px 20px 20px" height="250px">
      <h1>TITLE IS HEAR</h1>
    </ContentBlock>
    <ContentBlock bg="#e8ecf1">
      <Slide left>
        <h3>About Us</h3>
      </Slide>
    </ContentBlock>
    <ContentBlock>
      <Slide left>
        <h3>Mission</h3>
      </Slide>
    </ContentBlock>
    <ContentBlock bg="#e8ecf1">
      <Slide left>
        <h3>Contact</h3>
      </Slide>
    </ContentBlock>
    <ContentBlock>
      <Slide left>
        <h3>Access</h3>
      </Slide>
    </ContentBlock>
    <Footer />
  </>
)

export default IndexPage
