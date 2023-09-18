import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/(website)/nav";
import initialPromptReducer from "./slices/(website)/prompt";
import soundReducer from "../../components/_gen/sound";
import counterReducer from "./slices/counter";

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
