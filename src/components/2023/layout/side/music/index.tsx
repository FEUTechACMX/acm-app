"use client";
import { useAppDispatch } from "@/utils/redux/hooks";
import { useEffect, useRef } from "react";
import ChildrenProps from "types/ChildrenProps";
import { toggleSound } from "../../../_gen/sound";

type Path = string;

type AudioRef = HTMLAudioElement | undefined;

const createAudioElement = (path: Path): AudioRef => {
	const audio = new Audio(path);
	audio.loop = true;
	audio.volume = 0.4;
	return audio;
};

interface Props extends ChildrenProps {
	path: string;
}

const LayoutSound: React.FC<Props> = ({ children, path }) => {
	const dispatch = useAppDispatch();
	const audioRef = useRef<AudioRef>(undefined);

	const playAudio = () => {
		if (audioRef?.current?.paused) audioRef.current?.play();
		else audioRef?.current?.pause();
	};
	useEffect(() => {
		audioRef.current = createAudioElement(path);
	}, [path]);

	return (
		<span
			onClick={() => {
				dispatch(toggleSound());
				playAudio();
			}}
		>
			{children}
		</span>
	);
};

export default LayoutSound;
