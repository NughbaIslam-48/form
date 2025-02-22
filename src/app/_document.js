import Document, { Html, Head, Main, NextScript } from 'next/document'
   
  class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps}
    }
   
    render() {
      return (
        <Html lang="en">
          <Head>
          <meta charset="UTF-8" />
    <title>Responsive Contact Us Form | CodingLab</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
   
  export default MyDocument