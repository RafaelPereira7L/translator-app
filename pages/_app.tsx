import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import '../styles/globals.scss';
import theme from '../components/theme';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
