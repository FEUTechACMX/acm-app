"use client";
import { Provider } from "react-redux";
import ChildrenProps from "types/ChildrenProps";
import { store } from "./store";

export const ReduxProviders: React.FC<ChildrenProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxProviders;
