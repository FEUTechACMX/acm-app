import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import type { Engine } from "tsparticles-engine";
const ParticlesGen = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	return (
		<div>
			<Particles
				className="absolute top-0 left-0 w-full h-full"
				id="tsparticles"
				init={particlesInit}
				options={{
					fullScreen: {
						enable: false,
					},
					background: {
						color: {
							value: "#0b001a",
						},
					},
					fpsLimit: 120,
					particles: {
						color: {
							value: "#6661ff",
						},
						collisions: {
							enable: false,
						},
						move: {
							direction: "none",
							enable: true,
							outModes: {
								default: "bounce",
							},
							random: true,
							speed: 1.5,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 500,
							},
							value: 60,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 2, max: 8 },
						},
					},
				}}
			/>
		</div>
	);
};

export default ParticlesGen;
