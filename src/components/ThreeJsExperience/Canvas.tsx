import { Canvas } from '@react-three/fiber';
import { Experience } from '.';

import './Canvas.scss';

const ThreeCanvas = () => {
	return (
		<Canvas
			className="canvas"
			camera={{
				fov: 45,
				near: 0.1,
				far: 2000,
				position: [-3, 1.5, 4]
			}}
		>
			<Experience />
		</Canvas>
	);
};

export default ThreeCanvas;
