import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const GenParticles = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadSlim(engine);
	}, []);

	return (
		<div>
			<Particles
				id="tsparticles"
				className="absolute top-0 left-0 w-full h-full"
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
					fpsLimit: 60,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: true,
								mode: "repulse",
							},
							resize: true,
						},
						modes: {
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: "#c505f5",
						},
						links: {
							color: "#833fe0",
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 1,
						},
						move: {
							direction: "none",
							enable: true,
							outModes: {
								default: "bounce",
							},
							random: false,
							speed: 6,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 800,
							},
							value: 80,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 1, max: 5 },
						},
					},
					detectRetina: true,
				}}
			/>
		</div>
	);
};

export default GenParticles;
