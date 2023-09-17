import { createSlice } from "@reduxjs/toolkit";
type initialPromptState = {
	isSoundPromptShown: boolean;
	isFeaturedShown: boolean;
};

const initialState: initialPromptState = {
	isSoundPromptShown: true,
	isFeaturedShown: true,
};

export const initialPrompt = createSlice({
	name: "initialPrompt",
	initialState,
	reducers: {
		toggleSoundPrompt: (state) => {
			state.isSoundPromptShown = !state.isSoundPromptShown;
		},
		toggleFeatured: (state) => {
			state.isFeaturedShown = !state.isFeaturedShown;
		},
	},
});

export const { toggleSoundPrompt, toggleFeatured } = initialPrompt.actions;
export default initialPrompt.reducer;
