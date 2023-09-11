"use client";
import { useEffect, useRef } from "react";

type Path = `/media/music/${string}.mp3` | `/media/sfx${string}.mp3`;
interface Props {
	children: React.ReactNode;
	props: {
		onClick?: {
			path: Path;
			isLooped: boolean;
		};
		onMouseOver?: {
			path: Path;
			isLooped: boolean;
		};
	};
}
// TODO: Make factory function for audio elements

type AudioRef = HTMLAudioElement | undefined;
const Music: React.FC<Props> = ({ children, props }) => {
	const { onClick, onMouseOver } = props;
	const clickAudioRef = useRef<AudioRef>(
		typeof Audio !== "undefined" ? new Audio("") : undefined,
	);
	const mouseOverAudioRef = useRef<AudioRef>(
		typeof Audio !== "undefined" ? new Audio("") : undefined,
	);
	useEffect(() => {
		if (onClick) {
			clickAudioRef.current = new Audio(onClick.path);
			clickAudioRef.current.loop = onClick.isLooped;
			clickAudioRef.current.volume = 0.4;
		}
		if (onMouseOver) {
			mouseOverAudioRef.current = new Audio(onMouseOver.path);
			mouseOverAudioRef.current.loop = onMouseOver.isLooped;
			mouseOverAudioRef.current.volume = 0.4;
		}
	}, [onClick, onMouseOver]);
	const playOnClick = () => {
		if (clickAudioRef.current?.paused) clickAudioRef.current?.play();
		else clickAudioRef.current?.pause();
	};
	const playOnMouseOver = () => {
		if (!onMouseOver) return;
		if (mouseOverAudioRef.current?.paused) mouseOverAudioRef.current?.play();
		else mouseOverAudioRef.current?.pause();
	};
	return (
		<span onClick={playOnClick} onMouseOver={playOnMouseOver}>
			{children}
		</span>
	);
};

export default Music;
