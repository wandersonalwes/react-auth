import React from 'react';
import ThemeProvider from './contexts/theme';
import AuthProvider from './contexts/auth';

import GlobalStyle from './styles/global';

import Routes from './routes';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  );
}
