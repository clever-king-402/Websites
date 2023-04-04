import React from 'react';
import * as THREE from 'three';

export default function Cubes() {
  const cubeBoxRef = React.useRef();
  const style = {"width" : "400px","height" : "400px",};
  
  // Create the renderer and set its size
  const renderer = new THREE.WebGLRenderer();

  // Append the renderer to the cubeBoxRef element and set its size
  React.useEffect(() => {
    const width = cubeBoxRef.current.clientWidth;
    const height = cubeBoxRef.current.clientHeight;
    renderer.setSize(width, height);
    cubeBoxRef.current.appendChild(renderer.domElement);
  }, []);

  // Create the scene and camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75,2,.1,1000);
  camera.position.z  = 3;

  // Create the box and add it to the scene
  const geometry = new THREE.BoxGeometry(1,1,1);
  const material = new THREE.MeshBasicMaterial({color:0xffcc66});
  const cube = new THREE.Mesh(geometry,material);
  scene.add(cube);

  // Render the scene continuously
  React.useEffect(() => {
    function render() {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
    }
    render();
  }, []);

  return (
    <>
      <canvas ref={cubeBoxRef} style={style}></canvas>
    </>
  )
}
