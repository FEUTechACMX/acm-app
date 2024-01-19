import { createSlice } from "@reduxjs/toolkit";
import { NavState } from "types/NavState";

const initialState: NavState = {
	isNavOpen: false,
};

export const AppNav = createSlice({
	name: "nav",
	initialState,
	reducers: {
		toggleNav: (state) => {
			state.isNavOpen = !state.isNavOpen;
		},
		closeNav: (state) => {
			state.isNavOpen = false;
		},
	},
});

export const { toggleNav, closeNav } = AppNav.actions;
export default AppNav.reducer;
