import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import React from "react";
import { App } from "./App";
import { theme } from "./styles/theme";
import { AppProvider } from "./contexts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
