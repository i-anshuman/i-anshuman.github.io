import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

export default class PortfolioDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head prefix="profile: https://ogp.me/ns/profile#">
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
          <meta
            name="robots"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta name="color-scheme" content="dark light" />
          <meta name="theme-color" content="#000000" />
          <meta name="author" content="Anshuman Gupta" />
          <meta name="description" content="Anshuman's Portfolio" />
          <meta
            name="keywords"
            content="Anshuman, Portfolio, Software Developer, Programmer, Java, Spring Boot, Hibernate, MySQL, PL/SQL, React, NextJS, Redux, TypeScript, CSS, Backend, Frontend, Full Stack"
          />
          <meta property="og:site_name" content="Anshuman Gupta" />
          <meta property="og:title" content="Anshuman Gupta" />
          <meta property="og:description" content="Anshuman's Portfolio" />
          <meta property="og:url" content="https://i-anshuman.github.io/" />
          <meta property="og:type" content="profile" />
          <meta property="profile:first_name" content="Anshuman" />
          <meta property="profile:last_name" content="Gupta" />
          <meta property="profile:gender" content="male" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/ianshuman/image/upload/v1614268464/misc/banner_lbfyip.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://res.cloudinary.com/ianshuman/image/upload/v1614268464/misc/banner_lbfyip.png"
          />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="640" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:image"
            content="https://res.cloudinary.com/ianshuman/image/upload/v1614268464/misc/banner_lbfyip.png"
          />
          <meta property="twitter:site" content="@_AnshumanGupta" />
          <meta property="twitter:creator" content="@_AnshumanGupta" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bitter&family=Pacifico&family=Raleway&family=Source+Code+Pro&family=Tourney:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
