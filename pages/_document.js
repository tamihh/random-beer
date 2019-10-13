import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>The Randon Beer App</title>
          <meta charSet="UTF-8" />
          <link rel="icon" href={process.env.PUBLIC_URL + "/favicon.ico"} />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="A amazing App to display the most amazing Beers!"
          />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
