import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import navReducer from "./slices/(website)/nav";

export const store = configureStore({
	reducer: {
		counterReducer,
		navReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
