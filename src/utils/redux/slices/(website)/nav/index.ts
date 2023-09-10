import { createSlice } from "@reduxjs/toolkit";
type NavState = {
	isNavOpen: boolean;
};

const initialState: NavState = {
	isNavOpen: false,
};

export const nav = createSlice({
	name: "nav",
	initialState,
	reducers: {
		toggleNav: (state) => {
			state.isNavOpen = !state.isNavOpen;
		},
	},
});

export const { toggleNav } = nav.actions;
export default nav.reducer;
