import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Not: Global.css en altta olmalı çünkü carouseldeki bazı kodları ezeceğim.
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
