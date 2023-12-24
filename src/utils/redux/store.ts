import { configureStore } from "@reduxjs/toolkit";
import soundReducer from "../../components/(website)/2023/_gen/sound";
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
