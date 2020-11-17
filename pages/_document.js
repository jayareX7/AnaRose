import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script async src="https://cdn.snipcart.com/themes/v3.0.23/default/snipcart.js"></script>
          <div hidden id="snipcart" data-api-key="YzY4MmJmZGMtNTRhNi00ZGIzLTkwMDgtMmY5NDgwYzE4MjQ3NjM3Mzc1NTE4NTE1ODEzMDQw"></div>
          
        </body>
      </Html>
    )
  }
}
