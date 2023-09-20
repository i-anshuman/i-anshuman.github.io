import Script from "next/script";

export default function Analytics(props: {}) {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BQ9DDZYQVM" strategy="afterInteractive"></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BQ9DDZYQVM');
        `}
      </Script>
    </>
  );
}
