import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { myStore } from "./store/store.js";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import "./index.css";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={myStore}>
      <App />
    </Provider>
  </BrowserRouter>
);
