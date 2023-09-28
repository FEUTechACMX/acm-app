import { configureStore } from "@reduxjs/toolkit";
import soundReducer from "../../components/2023/(website)/(main)/_gen/sound";
import navReducer from "./slices/(website)/nav";
import initialPromptReducer from "./slices/(website)/prompt";
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
