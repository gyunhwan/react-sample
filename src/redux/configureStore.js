import { configureStore } from "@reduxjs/toolkit";
import counter from "./modules/counter";
import contact from "./modules/contact";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk];
const store = configureStore({
  reducer: {
    counter,
    contact,
  },
  middleware,
  devTools: composeWithDevTools,
});

export default store;
