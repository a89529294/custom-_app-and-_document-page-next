import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import ThemeContextWrapper from "../components/themeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextWrapper>
      <Navbar />
      <Component {...pageProps} />
    </ThemeContextWrapper>
  );
}

export default MyApp;
