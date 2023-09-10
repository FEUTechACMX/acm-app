import { createSlice } from "@reduxjs/toolkit";

type NavState = {
	isNavOpen: boolean;
};

const initialState: NavState = {
	isNavOpen: false,
};

// q: how do I get the state?
// a: use the state parameter

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
