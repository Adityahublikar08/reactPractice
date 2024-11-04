import React from "react";
import DataFetch from "./all sites/DataFetch";
import Website from "./all sites/Website";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./all sites/ContextProvider";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
     <ContextProvider>
     <Website />
     </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
