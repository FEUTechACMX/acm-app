import { createSlice } from "@reduxjs/toolkit";
type soundState = {
	isSoundAllowed: boolean;
};

const initialState: soundState = {
	isSoundAllowed: false,
};

export const sound = createSlice({
	name: "sound",
	initialState,
	reducers: {
		toggleSound: (state) => {
			state.isSoundAllowed = !state.isSoundAllowed;
		},
	},
});

export const { toggleSound } = sound.actions;
export default sound.reducer;
