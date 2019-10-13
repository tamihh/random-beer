import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../theme/global-style';

const fontSize = {
  xxs: 12,
  xs: 14,
  s: 16,
  m: 18,
  l: 21,
  xl: 24,
  xxl: 32,
};

const theme = {
  fontSize,
  colors: {
    primary: '#0070f3',
  },
  text: {
    color: '#666',
    size: fontSize.s,
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}
