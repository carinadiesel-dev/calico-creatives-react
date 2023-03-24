import type { AppType } from 'next/app';
import {SessionProvider} from "next-auth/react";
import Script from "next/script";
import '../styles/globals.css';
import {trpc} from "@/utils/trpc";
import {Session} from 'next-auth'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import * as gtag from '@/utils/gtag'
import AOS from "aos";
import "aos/dist/aos.css";

const MyApp: AppType<{
  session: Session
}> = ({ Component, pageProps: { session, ...pageProps } }) => {

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      mirror: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return <>

    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=G-1SRVQEZCET`}
    />
    <Script
      id={"google-tag"}
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-1SRVQEZCET');
          `,
      }}
    />

    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>

  </>;
};

export default trpc.withTRPC(MyApp);