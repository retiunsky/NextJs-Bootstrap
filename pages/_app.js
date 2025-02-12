import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import BootstrapThemeProvider from '../src/BootstrapThemeProvider';
import FirstNavbar from '../src/comps/Navbar';

export default function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <ThemeProvider forcedTheme={Component.theme || undefined}>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link
            href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css'
            rel='stylesheet'
            integrity='sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1'
            crossOrigin='anonymous'
          />
        </Head>

        <Script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW'
          crossOrigin='anonymous'
        />
        <>
          {' '}
          <BootstrapThemeProvider>
            <header>
              <FirstNavbar />
            </header>
            <Component {...pageProps} />
          </BootstrapThemeProvider>
        </>
      </ThemeProvider>
    );
  }
}
