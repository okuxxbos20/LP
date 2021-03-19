import './_app.scss'
import { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.min.css'
import { RecoilRoot } from 'recoil'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default App
