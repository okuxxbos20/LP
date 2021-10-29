import { ServerStyleSheets } from '@material-ui/core/styles'
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <title>Your LandingPage</title>
          <link rel="favicon" href="/favicons/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const styledComponentsSheets = new ServerStyleSheet()
  const materialUiServerStyleSheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props =>
          styledComponentsSheets.collectStyles(
            materialUiServerStyleSheets.collect(<App {...props} />)
          )
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styledComponentsSheets.getStyleElement()}
          {materialUiServerStyleSheets.getStyleElement()}
        </>
      )
    }
  } finally {
    styledComponentsSheets.seal()
  }
}
