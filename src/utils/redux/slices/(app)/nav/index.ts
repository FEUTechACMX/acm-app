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
	},
});

export const { toggleNav } = AppNav.actions;
export default AppNav.reducer;
