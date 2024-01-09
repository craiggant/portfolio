// packages
import React, { useCallback, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
	ContactShadows,
	Environment,
	Html,
	PresentationControls,
	useGLTF
} from '@react-three/drei';
import { useResize } from '../../hooks';

const positionVector = new THREE.Vector3();
const zoomedInVector = new THREE.Vector3(0, 0.7, 0);
const zoomedOutVector = new THREE.Vector3(0, 0, -0.5);

export default function Experience() {
	const [isZoomed, setIsZoomed] = useState(false);

	const computerRef = useRef<any>(null);

	const computer = useGLTF('src/assets/models/model.gltf');

	const { isResizing } = useResize();

	const lerpFactor = 0.04;

	// sets camera position based on screen size
	const setZoomedInVector = useCallback(() => {
		const { innerWidth: width, innerHeight: height } = window;
		const [xLarge, large, med, small] = [1484, 1130, 1024, 956];

		// for landscape
		if (screen.orientation.type.includes('landscape')) {
			if (width > xLarge) return positionVector.set(0, 1, 1.5);
			if (width > large) return positionVector.set(0, 1.3, 2.3);
			return positionVector.set(0, 1.5, 3);
		}
		// for portrait
		if (height > xLarge) return positionVector.set(0, 1.5, 5);
		if (height > large) {
			if (width > 956) return positionVector.set(0, 1.5, 4);
			return positionVector.set(0, 1.5, 5);
		}
		if (height < large) {
			if (width > large) return positionVector.set(0, 1.3, 2.3);
			if (width > med) return positionVector.set(0, 1.5, 3);
			if (width > small) return positionVector.set(0, 1.5, 3);
			return positionVector.set(0, 1.5, 5);
		}
	}, []);

	const setZoomedOutVector = useCallback(() => {
		const { screen, innerHeight: height } = window;
		if (screen.orientation.type.includes('landscape'))
			return positionVector.set(-3, 1.5, 4);
		if (height > 1300) return positionVector.set(-4, 1.5, 6);
		if (height > 1289) return positionVector.set(-4, 1.5, 6);
		return positionVector.set(-3, 1.5, 4);
	}, []);

	useFrame(({ camera }) => {
		if (isZoomed) {
			camera.position.lerp(setZoomedInVector(), lerpFactor);
			camera.lookAt(zoomedInVector);
			camera.updateProjectionMatrix();
		} else {
			camera.lookAt(zoomedOutVector);
			camera.position.lerp(setZoomedOutVector(), lerpFactor);
			camera.updateProjectionMatrix();
		}
		return null;
	});

	// conditionally rendering prevents visual issues on resize
	const screenContent = isResizing ? null : (
		<Html
			distanceFactor={1.17}
			transform
			position={[0, 1.56, -1.4]}
			rotation-x={-0.256}
			wrapperClass="computerScreen"
		>
			<iframe src="https://craiggant-portfolio.vercel.app/" />
		</Html>
	);

	return (
		<>
			<color args={['#241a1a']} attach="background" />
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
					color="#2C3E50"
					rotation={[-0.1, Math.PI, 0]}
					position={[0, 0.55, -1.15]}
				/>

				<primitive
					object={computer.scene}
					position-y={-1.2}
					ref={computerRef}
				>
					{screenContent}
				</primitive>
			</PresentationControls>
			<ContactShadows
				position-y={-1.4}
				opacity={0.6}
				scale={5}
				blur={2.4}
			/>
		</>
	);
}
