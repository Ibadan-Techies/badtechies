import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={''}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="* box-border m-0 p-0 overflow-wrap break-word focus:shadow-outline-gray antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
