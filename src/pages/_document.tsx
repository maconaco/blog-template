import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
          <style>{`
            * {
              box-sizing: border-box;
            }
            html {
              font-size: 62.5%;
            }
            html::-webkit-scrollbar {
              display: none;
            }
            a {
              text-decoration: none;
            }
            ul {
              margin: 0;
              padding: 0;
              list-style-type: none;
            }
            h2 {
              font-size: 28px;
              font-weight: normal;
            }
            input,
            textarea {
              border: none;
              outline: none;
            }
            .flex {
              display: flex;
            }
            .text {
              white-space: pre-wrap;
            }
          `}</style>
        </Head>
        <body className="w3-light-grey">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
