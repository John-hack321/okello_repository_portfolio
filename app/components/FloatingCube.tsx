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

    // Create cube with rounded edges
    const geometry = new THREE.BoxGeometry(3, 3, 3, 10, 10, 10);
    const material = new THREE.MeshPhongMaterial({ 
      color: 0x00abf0,
      shininess: 100,
      specular: 0x222222,
      flatShading: false,
      transparent: true,
      opacity: 0.95,
      emissive: 0x00abf0,
      emissiveIntensity: 0.1
    });
    
    // Add wireframe for better visibility
    const wireframe = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 })
    );
    
    const cube = new THREE.Mesh(geometry, material);
    cube.add(wireframe);
    scene.add(cube);
    cubeRef.current = cube;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
    scene.add(ambientLight);

    // Main key light
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(2, 3, 4);
    scene.add(keyLight);

    // Fill light
    const fillLight = new THREE.DirectionalLight(0x88ccff, 0.6);
    fillLight.position.set(-2, -1, -1);
    scene.add(fillLight);

    // Rim/back light
    const rimLight = new THREE.DirectionalLight(0x00aaff, 0.8);
    rimLight.position.set(-1, 1, -2);
    scene.add(rimLight);

    // Add orbit controls for dragging
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI; // Prevent flipping
    controls.minDistance = 5; // Fixed distance
    controls.maxDistance = 5; // Fixed distance - same as min to prevent zooming
    controls.enableZoom = false; // Disable zooming
    controls.enablePan = false; // Disable panning
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.5;
    controlsRef.current = controls;
    
    // Position camera for better view
    camera.position.z = 6;

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
    let time = 0;
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      // Update controls
      controls.update();
      time += 0.005;
      
      if (cubeRef.current) {
        // Add subtle floating animation
        cubeRef.current.position.y = Math.sin(time) * 0.1;
        
        // Auto-rotation when not interacting
        if (!isUserInteracting.current && controls.autoRotate) {
          cubeRef.current.rotation.y += 0.003;
          // Subtle bobbing rotation
          cubeRef.current.rotation.x = Math.sin(time * 0.5) * 0.05;
          cubeRef.current.rotation.z = Math.cos(time * 0.3) * 0.03;
        }
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
    <div className="w-full h-full flex items-center justify-center py-4">
      <div 
        ref={mountRef} 
        style={{ 
          width: '550px',
          height: '550px',
          maxWidth: '90vw',
          maxHeight: '90vw',
          backgroundColor: 'transparent',
          cursor: 'grab',
          margin: '0 auto',
        }} 
        onMouseDown={() => {
          if (mountRef.current) mountRef.current.style.cursor = 'grabbing';
        }}
        onMouseUp={() => {
          if (mountRef.current) mountRef.current.style.cursor = 'grab';
        }}
      />
    </div>
  );
};

export default FloatingCube;
