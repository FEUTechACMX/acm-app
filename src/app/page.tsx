"use client";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import { decrement, increment, reset } from "@/utils/redux/slices/counter";
import type { NextPage } from "next";
const Home: NextPage = () => {
	const count = useAppSelector((state) => state.counterReducer.value);
	const dispatch = useAppDispatch();
	return (
		<main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
			<div style={{ marginBottom: "4rem", textAlign: "center" }}>
				<h4 style={{ marginBottom: 16 }}>{count}</h4>
				<button onClick={() => dispatch(increment())}>increment</button>
				<button
					onClick={() => dispatch(decrement())}
					style={{ marginInline: 16 }}
				>
					decrement
				</button>
				<button onClick={() => dispatch(reset())}>reset</button>
			</div>
		</main>
	);
};

export default Home;
