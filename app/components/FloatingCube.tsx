'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const FloatingCube = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const animationRef = useRef<number>();
  const cubeRef = useRef<THREE.Mesh | null>(null);
  const isUserInteracting = useRef(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create scene
    const scene = new THREE.Scene();
    scene.background = null;

    // Create camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0);
    
    // Add renderer to DOM
    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);

    // Create cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({ 
      color: 0x00abf0,
      shininess: 100,
      specular: 0x111111,
      flatShading: true
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cubeRef.current = cube;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(1, 1, 1);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-1, -1, -1);
    scene.add(directionalLight2);

    // Add orbit controls for dragging
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI; // Prevent flipping
    controls.minDistance = 3;
    controls.maxDistance = 10;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.5;
    controlsRef.current = controls;

    // Track user interaction
    const onStart = () => {
      isUserInteracting.current = true;
      controls.autoRotate = false;
    };

    const onEnd = () => {
      isUserInteracting.current = false;
      // Only re-enable auto-rotate after a delay if user isn't interacting
      setTimeout(() => {
        if (!isUserInteracting.current) {
          controls.autoRotate = true;
        }
      }, 2000);
    };

    controls.addEventListener('start', onStart);
    controls.addEventListener('end', onEnd);

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      // Update controls
      controls.update();
      
      // Smooth auto-rotation when not interacting
      if (!isUserInteracting.current && controls.autoRotate) {
        cube.rotation.y += 0.003; // Slow, smooth rotation
      }
      
      // Render scene
      renderer.render(scene, camera);
    };
    
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener('resize', handleResize);
      controls.removeEventListener('start', onStart);
      controls.removeEventListener('end', onEnd);
      controls.dispose();
      if (mountRef.current) {
        mountRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: '400px',
        backgroundColor: 'transparent',
        cursor: 'grab'
      }} 
      onMouseDown={() => {
        if (mountRef.current) mountRef.current.style.cursor = 'grabbing';
      }}
      onMouseUp={() => {
        if (mountRef.current) mountRef.current.style.cursor = 'grab';
      }}
    />
  );
};

export default FloatingCube;
