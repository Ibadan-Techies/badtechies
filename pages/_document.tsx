import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body className="* box-border m-0 p-0 overflow-wrap break-word focus:shadow-outline-gray antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
