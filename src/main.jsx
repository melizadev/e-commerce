import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Mainlayout from "./pages/mainlayout/Mainlayout.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import "./translations/i18n.js";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router";
import { UserContextProvider } from "./context/UserContext.jsx";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <UserContextProvider>
        <Mainlayout />
      </UserContextProvider>

      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  </Provider>,
);
