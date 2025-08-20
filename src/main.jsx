import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Mainlayout from "./pages/mainlayout/Mainlayout.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import "./translations/i18n.js";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Mainlayout />
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
