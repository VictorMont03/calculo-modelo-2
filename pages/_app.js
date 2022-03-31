import App from "next/app";
import GlobalStyle from "../styles/global.js";
import Head from "next/head";
import SiteScripts from "../utils/site-scripts.js";
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="" />
          <link rel="icon" href="/favicon.png" />
          <meta property="og:image" content="/screenshot.png" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-180421237-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                       function gtag(){dataLayer.push(arguments)}
                       gtag('js', new Date());
                       gtag('config', 'UA-180421237-2');`,
            }}
          />
        </Head>
        <SiteScripts />
        <Component {...pageProps} />
        <GlobalStyle />
      </>
    );
  }
}
