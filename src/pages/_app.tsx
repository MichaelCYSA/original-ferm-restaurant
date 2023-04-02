import '@/styles/globals.css';

import { LanguageContextWrapper } from '@/lang/languageContext';
import MainLayout from '@/layout';
import theme from '@/theme';
import { ThemeProvider } from '@mui/material/styles';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <LanguageContextWrapper>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </LanguageContextWrapper>
  )
}
