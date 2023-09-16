"use client";
import { useEffect, useRef } from "react";

type Path = `/media/music/${string}.mp3` | `/media/sfx${string}.mp3`;

interface AudioProps {
	path: Path;
	isLooped: boolean;
}

interface Props {
	className?: string;
	children: React.ReactNode;
	events: {
		// eslint-disable-next-line no-unused-vars
		[K in keyof React.DOMAttributes<HTMLElement>]?: AudioProps;
	};
}

type AudioRef = HTMLAudioElement | undefined;

const createAudioElement = (audioProps?: AudioProps): AudioRef => {
	if (!audioProps) return undefined;
	const audio = new Audio(audioProps.path);
	audio.loop = audioProps.isLooped;
	audio.volume = 0.4;
	return audio;
};

const Music: React.FC<Props> = ({ children, events, className }) => {
	const refs = useRef<{
		// eslint-disable-next-line no-unused-vars
		[K in keyof typeof events]?: React.RefObject<AudioRef>;
	}>({});

	useEffect(() => {
		for (const event in events) {
			refs.current[event as keyof typeof events] = {
				current: createAudioElement(events[event as keyof typeof events]),
			};
		}
	}, [events]);

	const playAudio = (event: keyof typeof events) => {
		const audioRef = refs.current[event];
		if (audioRef?.current?.paused) audioRef.current?.play();
		else audioRef?.current?.pause();
	};

	const eventHandlers = events
		? Object.keys(events).reduce(
				(acc, event) => ({
					...acc,
					[event]: () => playAudio(event as keyof typeof events),
				}),
				{},
		  )
		: {};

	return (
		<span {...eventHandlers} className={className}>
			{children}
		</span>
	);
};

export default Music;
