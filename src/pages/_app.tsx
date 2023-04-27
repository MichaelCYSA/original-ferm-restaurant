import "@/styles/globals.css";

import { LanguageContextWrapper } from "@/lang/languageContext";
import ClientLayout from "@/layout/ClientLayout";
import AdminLayout from "@/layout/AdminLayout";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "@/store";

import type { AppProps } from "next/app";

const Layuot = ({ children }: { children: JSX.Element }) => {
  const { pathname } = useRouter();

  if (pathname.includes("admin")) {
    return <AdminLayout>{children}</AdminLayout>;
  }
  if (pathname.includes("auth")) {
    return <>{children}</>;
  }
  return <ClientLayout>{children}</ClientLayout>;
};

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LanguageContextWrapper>
        <ThemeProvider theme={theme}>
          <Layuot>
            <Component {...pageProps} />
          </Layuot>
        </ThemeProvider>
      </LanguageContextWrapper>
    </Provider>
  );
}

export default App;
