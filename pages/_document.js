import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth transition-all">
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id="toast-backdrop"></div>
      </body>
    </Html>
  );
}
