import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import navReducer from "./slices/(website)/nav";
import soundReducer from "./slices/(website)/music";
import initialPromptReducer from "./slices/(website)/prompt";

export const store = configureStore({
	reducer: {
		counterReducer,
		navReducer,
		soundReducer,
		initialPromptReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
