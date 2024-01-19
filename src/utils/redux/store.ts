import soundReducer from "@/components/2023/_gen/sound";
import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/2023/nav";
import initialPromptReducer from "./slices/2023/prompt";
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
