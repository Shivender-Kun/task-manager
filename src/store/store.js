import { configureStore } from "@reduxjs/toolkit";
import reducer from "./functions/add";

const store = configureStore({
  reducer,
});

export default store;
