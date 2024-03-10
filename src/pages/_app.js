import "@/styles/globals.css";
import "react-slideshow-image/dist/styles.css";
import { Analytics } from "@vercel/analytics/react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </>
  );
}
