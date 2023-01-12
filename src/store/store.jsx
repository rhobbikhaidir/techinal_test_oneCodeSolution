import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "./userSlicer";

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// });

const store = configureStore({
  reducer: userSlicer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
