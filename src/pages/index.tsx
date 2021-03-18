import { ContentBlock } from '../components/layer3'
import { Footer, Header } from '../components/layer4'

const IndexPage = () => (
  <>
    <Header />
    <ContentBlock padding="50px 20px 20px" height="250px">
      <p>content block</p>
    </ContentBlock>
    <ContentBlock bg="#e8ecf1">
      <p>content block</p>
    </ContentBlock>
    <ContentBlock>
      <p>content block</p>
    </ContentBlock>
    <ContentBlock bg="#e8ecf1">
      <p>content block</p>
    </ContentBlock>
    <ContentBlock>
      <p>content block</p>
    </ContentBlock>
    <Footer />
  </>
)

export default IndexPage
