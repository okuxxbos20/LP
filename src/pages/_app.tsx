import './_app.scss'

import { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.min.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
