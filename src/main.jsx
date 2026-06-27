import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "../src/routes/AppRouter.jsx";
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
        <AppRouter />
        <Toaster position="top-center" reverseOrder={false} />
      </UserContextProvider>
    </BrowserRouter>
  </Provider>,
);
