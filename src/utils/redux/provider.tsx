"use client";
import { Provider } from "react-redux";
import { store } from "./store";

interface Props {
	children: React.ReactNode;
}
export const Providers: React.FC<Props> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default Provider;
