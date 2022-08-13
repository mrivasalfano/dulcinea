import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import theme from '../themes/Dark';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp
