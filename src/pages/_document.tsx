// Main file which is responsible for all the rendering.
// A custom Document is commonly used to augment your
// application's <html> and <body> tags.
// It is rendered only on the server

import Document, { Html, Head, Main, NextScript } from "next/document"

// Class for exporting Document
class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Next JS" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}

export default CustomDocument
