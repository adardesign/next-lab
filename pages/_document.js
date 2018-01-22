import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1'/>
          <script dangerouslySetInnerHTML={{ __html: `document.cookie="a=p; path=/",window.adrma={}; window.isMobile=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)`}}></script>
          <meta charset='utf-8'/>
          <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Open+Sans:400' />
          <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Open+Sans:700' />
          <link rel='stylesheet' href='https://www.adorama.com/Als.Mvc/nspc/combres.axd/AD_MainCss/-/?svfor=1day&svcfor=1day&cacheVersion=391&ID=10166' />
          <link href='//fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' />
          <link rel='stylesheet' href='https://www.adorama.com/Als.Mvc/nspc/combres.axd/AD_RevisedTopCategoryPageCss/-/?svfor=1day&svcfor=1day&cacheVersion=391&ID=10166' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}