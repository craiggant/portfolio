// packages
import React, { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
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

const findBackgroundColor = (colorTheme: string) =>
	colorTheme === 'light' ? '#fff' : '#241a1a';

const findReflectionColor = (colorTheme: string) =>
	colorTheme === 'light' ? '#fff' : '#241a1a';

const findFontColor = (colorTheme: string) =>
	colorTheme === 'light' ? '#000' : '#fff';

const positionVector = new THREE.Vector3();
const zoomedInVector = new THREE.Vector3(0, 0.7, 0);
const zoomedOutVector = new THREE.Vector3(0, 0, -0.5);

export default function Experience() {
	const [isZoomed, setIsZoomed] = useState(false);

	const { colorTheme } = useToggleColorTheme();

	const computerRef = useRef<any>(null);

	const computer = useGLTF('src/assets/models/model.gltf');

	const lerpFactor = 0.04;

	useFrame(({ camera }) => {
		if (isZoomed) {
			const lookAtZoomedPosition = zoomedInVector
				.clone()
				.lerp(zoomedOutVector, lerpFactor);

			camera.position.lerp(positionVector.set(0, 1, 1.5), lerpFactor);

			camera.lookAt(lookAtZoomedPosition);
			camera.updateProjectionMatrix();
		} else {
			const lookAtPosition = zoomedOutVector
				.clone()
				.lerp(zoomedInVector, lerpFactor);
			camera.lookAt(lookAtPosition);
			camera.position.lerp(positionVector.set(-3, 1.5, 4), lerpFactor);
			camera.updateProjectionMatrix();
		}
		return null;
	});

	const { backgroundColor, reflectionColor, fontColor } = useMemo(() => {
		return {
			backgroundColor: findBackgroundColor(colorTheme ?? 'light'),
			reflectionColor: findReflectionColor(colorTheme ?? 'light'),
			fontColor: findFontColor(colorTheme ?? 'light')
		};
	}, [colorTheme]);

	return (
		<>
			<color args={[backgroundColor]} attach="background" />
			<Environment preset="city" />
			<Html wrapperClass="zoom-in-out">
				<button
					className="zoom-in-out__btn"
					onClick={() => setIsZoomed(!isZoomed)}
				>
					{isZoomed ? 'Zoom Out' : 'Zoom In'}
				</button>
			</Html>
			<PresentationControls
				azimuth={[-1, 0.75]}
				config={{ mass: 2, tension: 400 }}
				global
				polar={[-0.4, 0.2]}
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

				<primitive
					object={computer.scene}
					position-y={-1.2}
					ref={computerRef}
				>
					<Html
						distanceFactor={1.17}
						transform
						position={[0, 1.56, -1.4]}
						rotation-x={-0.256}
						wrapperClass="computerScreen"
					>
						<iframe src="https://www.craiggant.com" />
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

// TODO: add smaller screen with normal HomePage
