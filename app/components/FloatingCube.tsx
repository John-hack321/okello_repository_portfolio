'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls as OrbitControlsType } from 'three/addons/controls/OrbitControls.js';

const FloatingCube = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControlsType | null>(null);
  const animationRef = useRef<number | null>(null);
  const cubeRef = useRef<THREE.Mesh | null>(null);
  const isUserInteracting = useRef(false);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create scene
    const scene = new THREE.Scene();
    scene.background = null;
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(550, 550);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    
    if (mountRef.current) {
      mountRef.current.innerHTML = '';
      mountRef.current.appendChild(renderer.domElement);
    }

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

    // Dynamically import OrbitControls
    import('three/addons/controls/OrbitControls.js').then((module) => {
      const OrbitControls = module.OrbitControls;
      
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

      // Track user interaction
      const onStart = () => {
        isUserInteracting.current = true;
        if (controlsRef.current) {
          controlsRef.current.autoRotate = false;
        }
      };

      const onEnd = () => {
        isUserInteracting.current = false;
        if (controlsRef.current && !controlsRef.current.autoRotate) {
          controlsRef.current.autoRotate = true;
        }
      };

      // Add event listeners
      controls.addEventListener('start', onStart);
      controls.addEventListener('end', onEnd);

      // Cleanup
      return () => {
        controls.removeEventListener('start', onStart);
        controls.removeEventListener('end', onEnd);
        controls.dispose();
      };
    });
    
    // Position camera for better view
    camera.position.z = 6;

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

      // Only proceed if we have all required references
      if (!rendererRef.current || !sceneRef.current) return;

      // Rotate cube when not being interacted with
      if (cubeRef.current && !isUserInteracting.current) {
        cubeRef.current.rotation.x += 0.002;
        cubeRef.current.rotation.y += 0.004;
      }

      // Update controls if they exist
      if (controlsRef.current) {
        controlsRef.current.update();
      }

      rendererRef.current.render(sceneRef.current, camera);
    };
    
    animate();

    // Cleanup
    return () => {
      // Cancel animation frame
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }

      // Clean up renderer
      if (rendererRef.current && mountRef.current) {
        if (mountRef.current.contains(rendererRef.current.domElement)) {
          mountRef.current.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current.dispose();
        rendererRef.current = null;
      }

      // Clean up scene
      if (sceneRef.current) {
        // Dispose of all materials and geometries in the scene
        sceneRef.current.traverse(object => {
          if (object instanceof THREE.Mesh) {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
              if (Array.isArray(object.material)) {
                object.material.forEach(material => material.dispose());
              } else {
                object.material.dispose();
              }
            }
          }
        });
        sceneRef.current = null;
      }

      // Clean up controls
      if (controlsRef.current) {
        controlsRef.current.dispose();
        controlsRef.current = null;
      }

      // Remove event listeners
      window.removeEventListener('resize', handleResize);
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
