"use client";
import HomeWide from "@/components/2023/_gen/wide/HomeWide";
import { Image } from "@nextui-org/react";
import dynamic from "next/dynamic";
import NextImage from "next/image";
import {
	Execs,
	Groups,
	Marketing,
	Programs,
} from "public/2023/media/img/officers";
const ParticlesSnow = dynamic(
	() => import("@/components/2023/committees/particles"),
);
const Committees = () => {
	return (
		<HomeWide>
			<ParticlesSnow />
			<h2 className="z-10 text-center text-balance">FEU Tech ACM 23-24</h2>
			<div className="flex flex-wrap gap-2 justify-center">
				{Groups.map((grp, index) => (
					<a href={grp.src} target="_blank" key={index}>
						<Image
							as={NextImage}
							isZoomed
							isBlurred
							width={400}
							height={400}
							src={grp.src}
							className="aspect-auto"
						/>
					</a>
				))}
			</div>
			<h2 className="z-10">Executives</h2>
			<div className="flex flex-wrap gap-2 justify-center">
				{Execs.map((exec, index) => (
					<a href={exec.src} target="_blank" key={index}>
						<Image
							as={NextImage}
							isZoomed
							isBlurred
							width={300}
							height={300}
							src={exec.src}
						/>
					</a>
				))}
			</div>
			<h2 className="z-10">Programs</h2>
			<div className="flex flex-wrap gap-2 justify-center">
				{Programs.map((pgr, index) => (
					<a href={pgr.src} target="_blank" key={index}>
						<Image
							as={NextImage}
							isZoomed
							isBlurred
							width={300}
							height={300}
							src={pgr.src}
						/>
					</a>
				))}
			</div>
			<h2 className="z-10">Marketing</h2>
			<div className="flex flex-wrap gap-2 justify-center">
				{Marketing.map((mkt, index) => (
					<a href={mkt.src} target="_blank" key={index}>
						<Image
							as={NextImage}
							isZoomed
							isBlurred
							width={300}
							height={300}
							src={mkt.src}
						/>
					</a>
				))}
			</div>
			<p className="z-10 text-center text-balance">
				Copyright FEU Tech ACM Student Chapter. All rights reserved.
			</p>
		</HomeWide>
	);
};

export default Committees;
