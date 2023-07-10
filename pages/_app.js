import ComponentProvider from "@/store/ComponentProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ComponentProvider>
      <Component {...pageProps} />
    </ComponentProvider>
  );
}
