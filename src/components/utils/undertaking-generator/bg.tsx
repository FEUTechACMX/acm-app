// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import { useEffect, useState } from "react";
// // import { MoveDirection } from "@tsparticles/engine";

// const UndertakingBG = () => {
// 	const [init, setInit] = useState(false);
// 	useEffect(() => {
// 		initParticlesEngine(async (engine) => {
// 			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
// 			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
// 			// starting from v2 you can add only the features you need reducing the bundle size
// 			//await loadAll(engine);
// 			//await loadFull(engine);
// 			await loadSlim(engine);
// 			//await loadBasic(engine);
// 		}).then(() => {
// 			setInit(true);
// 		});
// 	}, []);
// 	return (
// 		<div>
// 			{/* {init && (
// 				<Particles
//           options={{}} // You can find all of them on https://particles.js.org/
// 				/>
// 			)} */}
// 		</div>
// 	);
// };

// export default UndertakingBG;
