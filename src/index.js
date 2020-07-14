import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./reset.css";
import WebFont from "webfontloader";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import reducer from "./reducers/index";

WebFont.load({
  google: {
    families: ["sans-serif", "Roboto Slab", "Montserrat"],
  },
});

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store} className='hello'>
    <App />
  </Provider>,
  document.getElementById("root")
);
