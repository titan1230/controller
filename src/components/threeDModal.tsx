// components/ThreeDModel.tsx
import { useEffect } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const ThreeDModel: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('3d-container')?.appendChild(renderer.domElement);

    const objLoader = new OBJLoader();
    objLoader.load('../../public/Pandubbi.obj', (obj : any) => {
      scene.add(obj);

      // Center the model in the scene
      const box = new THREE.Box3().setFromObject(obj);
      const center = new THREE.Vector3();
      box.getCenter(center);
      obj.position.sub(center);

      // Add a basic white directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1).normalize();
      scene.add(directionalLight);

      // Set up camera position
      camera.position.z = 5;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the model (optional)
        obj.rotation.x += 0.005;
        obj.rotation.y += 0.005;

        // Render the scene
        renderer.render(scene, camera);
      };

      animate();
    }, undefined, (error) => {
      console.error('Error loading OBJ model:', error);
    });

    // Clean up on component unmount
    return () => {
      // Dispose of resources if needed
    };
  }, []);

  return <div id="3d-container" />;
};

export default ThreeDModel;
