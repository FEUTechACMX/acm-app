"use client";
import { useAppSelector } from "@/utils/redux/hooks";
import { toggleSound } from "../../../_gen/sound";
import { useAppDispatch } from "@/utils/redux/hooks";
import { useEffect, useRef } from "react";
type Path = `/2023/media/music/${string}.mp3` | `/2023/media/sfx${string}.mp3`;

interface AudioProps {
	path: Path;
	isLooped: boolean;
}

interface Props {
	className?: string;
	children: React.ReactNode;
	autoPlay?: boolean;
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

const Sound: React.FC<Props> = ({ children, events, className, autoPlay }) => {
	const { isSoundAllowed } = useAppSelector((state) => state.soundReducer);
	const dispatch = useAppDispatch();
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

	useEffect(() => {
		if (autoPlay) {
			const audioRef = refs.current.onClick;
			if (audioRef?.current?.paused) audioRef.current?.play();
		}
	}, [autoPlay]);

	const playAudio = (event: keyof typeof events) => {
		if (!isSoundAllowed) {
			dispatch(toggleSound());
			return;
		}
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

export default Sound;
