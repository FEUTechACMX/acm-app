"use client";
import { useEffect, useRef } from "react";
const Music: React.FC = () => {
	const audioRef = useRef<HTMLAudioElement | undefined>(
		typeof Audio !== "undefined" ? new Audio("") : undefined,
	);
	useEffect(() => {
		audioRef.current = new Audio("/media/music/persona_5.mp3");
	}, []);
	const play = () => {
		if (audioRef.current?.paused) audioRef.current?.play();
		else audioRef.current?.pause();
	};
	return <button onClick={play}>Music</button>;
};

export default Music;
