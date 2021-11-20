import React from 'react'
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import { ServerStyleSheet } from 'styled-components'

// _document.tsxはHTMLの<html>タグや<body>タグの拡張を行う
// このファイルはbrowserで実行されることはなく、server-sideのみで実行される
// そのためMaterial-UIやstyled-componentのcssをssrさせるためにこのファイルを使う
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const materialUiServerStyleSheets = new ServerStyleSheets()
    const styledComponentsSheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            styledComponentsSheet.collectStyles(materialUiServerStyleSheets.collect(<App {...props} />))
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styledComponentsSheet.getStyleElement()}
            {materialUiServerStyleSheets.getStyleElement()}
          </>
        )
      }
    } finally {
      styledComponentsSheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <link rel="favicon" href="favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
