import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classNames from "classnames";

import HomePage from "@/components/page/home";

function Home() {
  const { locale } = useRouter();
  const googleTagManagerScript = `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-W3FVHHC7');`;

  const chatwootScript = `
  (function(d,t) {
    var BASE_URL="https://app.chatwoot.com";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=BASE_URL+"/packs/js/sdk.js";
    g.defer = true;
    g.async = true;
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.chatwootSDK.run({
        websiteToken: 'D86QiaNhjxaqHmhrYB972Abf',
        baseUrl: BASE_URL
      })
    }
  })(document,"script");`;

  return (
    <main className={classNames("overflow-x-hidden", locale === "he" ? "font-assistant" : "font-roobert")}>
      <Head>
        <title>Safespace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-W3FVHHC7"></script>
        <script dangerouslySetInnerHTML={{ __html: googleTagManagerScript }} />
        <script dangerouslySetInnerHTML={{ __html: chatwootScript }} />
      </Head>
      <HomePage />
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 60,
  };
}

export default Home;
