"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadFull } from "tsparticles";

const ParticleAmongUs = () => {
	const [init, setInit] = useState(false);

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			await loadFull(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	return (
		<div>
			{init && (
				<Particles
					className="absolute top-0 left-0 w-full h-full"
					id="tsparticles"
					options={{
						fullScreen: {
							enable: true,
						},
						fpsLimit: 60,
						particles: {
							groups: {
								z5000: {
									number: {
										value: 70,
									},
									zIndex: {
										value: 5000,
									},
								},
								z7500: {
									number: {
										value: 30,
									},
									zIndex: {
										value: 75,
									},
								},
								z2500: {
									number: {
										value: 50,
									},
									zIndex: {
										value: 25,
									},
								},
								z1000: {
									number: {
										value: 40,
									},
									zIndex: {
										value: 10,
									},
								},
							},
							number: {
								value: 200,
								density: {
									enable: false,
									width: 800,
									height: 800,
								},
							},
							color: {
								value: "#fff",
								animation: {
									enable: false,
									speed: 20,
									sync: true,
								},
							},
							shape: {
								type: "circle",
							},
							opacity: {
								value: 1,
								animation: {
									enable: false,
									speed: 3,
									destroy: "min",
									sync: false,
								},
							},
							size: {
								value: 3,
							},
							links: {
								enable: false,
								distance: 100,
								color: "#ffffff",
								opacity: 0.4,
								width: 1,
							},
							move: {
								angle: {
									value: 10,
									offset: 0,
								},
								enable: true,
								speed: 5,
								direction: "right",
								random: false,
								straight: true,
								outModes: {
									default: "out",
								},
								attract: {
									enable: false,
									rotate: {
										x: 600,
										y: 1200,
									},
								},
							},
							zIndex: {
								value: 5,
								opacityRate: 0.5,
							},
						},
						interactivity: {
							detectsOn: "canvas",
							events: {
								onHover: {
									enable: false,
									mode: "repulse",
								},
								onClick: {
									enable: true,
									mode: "push",
								},
								resize: {
									enable: true,
								},
							},
							modes: {
								grab: {
									distance: 400,
									links: {
										opacity: 1,
									},
								},
								bubble: {
									distance: 400,
									size: 40,
									duration: 2,
									opacity: 0.8,
								},
								repulse: {
									distance: 200,
								},
								push: {
									quantity: 4,
									groups: ["z5000", "z7500", "z2500", "z1000"],
								},
								remove: {
									quantity: 2,
								},
							},
						},
						detectRetina: true,
						background: {
							color: "#0b001a",
							image: "",
							position: "50% 50%",
							repeat: "no-repeat",
							size: "cover",
						},
						emitters: {
							position: {
								y: 55,
								x: -30,
							},
							rate: {
								delay: 7,
								quantity: 1,
							},
							size: {
								width: 0,
								height: 0,
							},
							particles: {
								shape: {
									type: "images",
									options: {
										images: [
											{
												src: "/media/amongus/blue.png",
												width: 205,
												height: 267,
											},
											{
												src: "/media/amongus/cyan.png",
												width: 207,
												height: 265,
											},
											{
												src: "/media/amongus/green.png",
												width: 204,
												height: 266,
											},
											{
												src: "/media/amongus/lime.png",
												width: 206,
												height: 267,
											},
											{
												src: "/media/amongus/orange.png",
												width: 205,
												height: 265,
											},
											{
												src: "/media/amongus/pink.png",
												width: 205,
												height: 265,
											},
											{
												src: "/media/amongus/red.png",
												width: 204,
												height: 267,
											},
											{
												src: "/media/amongus/white.png",
												width: 205,
												height: 267,
											},
										],
									},
								},
								size: {
									value: 40,
								},
								move: {
									speed: 10,
									outModes: {
										default: "destroy",
										left: "none",
									},
									straight: true,
								},
								zIndex: {
									value: 0,
								},
								rotate: {
									value: {
										min: 0,
										max: 360,
									},
									animation: {
										enable: true,
										speed: 10,
										sync: true,
									},
								},
							},
						},
					}}
				/>
			)}
		</div>
	);
};

export default ParticleAmongUs;

// Credits: https://codepen.io/matteobruni/pen/rNmMVEx
