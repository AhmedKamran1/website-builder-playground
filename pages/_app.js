import "@/styles/globals.css";

import { wrapper } from "@/store/store";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material";
import theme from "@/styles/theme/theme";

const customTheme = createTheme(theme());

function App({ Component, pageProps, ...rest }) {
  const { store } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <PersistGate loading={<h1>Loading</h1>} persistor={store.__persistor}>
        <ThemeProvider theme={customTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
