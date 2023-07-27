import "designsystem/src/assets/css/index.css";
import ReactDOM from "react-dom/client";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
