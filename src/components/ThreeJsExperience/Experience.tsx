// packages
import React, { useMemo } from 'react';
import {
	ContactShadows,
	Environment,
	Html,
	PresentationControls,
	Text,
	useGLTF
} from '@react-three/drei';

// hooks
import { useToggleColorTheme } from '../../hooks';

import { Homepage } from '../../pages';

const findBackgroundColor = (colorTheme: string) =>
	colorTheme === 'light' ? '#fff' : '#241a1a';

const findReflectionColor = (colorTheme: string) =>
	colorTheme === 'light' ? '#fff' : '#241a1a';

const findFontColor = (colorTheme: string) =>
	colorTheme === 'light' ? '#000' : '#fff';

export default function Experience() {
	const { colorTheme } = useToggleColorTheme();

	const { backgroundColor, reflectionColor, fontColor } = useMemo(() => {
		return {
			backgroundColor: findBackgroundColor(colorTheme ?? 'light'),
			reflectionColor: findReflectionColor(colorTheme ?? 'light'),
			fontColor: findFontColor(colorTheme ?? 'light')
		};
	}, [colorTheme]);

	const computer = useGLTF('src/assets/models/model.gltf');

	return (
		<>
			<color args={[backgroundColor]} attach="background" />
			<Environment preset="city" />
			<PresentationControls
				azimuth={[-1, 0.75]}
				config={{ mass: 2, tension: 400 }}
				global
				polar={[-0.4, 0.2]}
				rotation={[0.13, 0.1, 0]}
				snap={{ mass: 4, tension: 400 }}
			>
				<rectAreaLight
					width={2.5}
					height={1.65}
					intensity={65}
					color={reflectionColor}
					rotation={[-0.1, Math.PI, 0]}
					position={[0, 0.55, -1.15]}
				/>
				<Text
					fontSize={1}
					position={[2, 0.75, 0.75]}
					rotation-y={-1.25}
					maxWidth={2}
					textAlign="center"
					color={fontColor}
				>
					Craig Gant
				</Text>
				<primitive object={computer.scene} position-y={-1.2}>
					<Html
						distanceFactor={1.17}
						transform
						position={[0, 1.56, -1.4]}
						rotation-x={-0.256}
						wrapperClass="computerScreen"
					>
						<Homepage />
					</Html>
				</primitive>
			</PresentationControls>
			<ContactShadows
				position-y={-1.4}
				opacity={0.4}
				scale={5}
				blur={2.4}
			/>
		</>
	);
}
