import { wrapper } from "@/store/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

function App({ Component, pageProps, ...rest }) {
  const { store } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
