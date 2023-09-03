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
	return (
		<div className="absolute bottom-2/4 right-0 z-10">
			<button onClick={play}>Music</button>
		</div>
	);
};

export default Music;
