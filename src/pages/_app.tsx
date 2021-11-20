// import './_app.scss'
import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { createGlobalStyle } from 'styled-components'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>LP</title>
      </Head>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a { text-decoration: none; }
`
