import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene =  new THREE.Scene();
scene.background = new THREE.Color(0x323133);


const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

const light = new THREE.AmbientLight(0x404040, 100);
scene.add(light); 

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(0.5, 0.3, 2);
controls.update();


const spotlight = new THREE.SpotLight(0xffffff, 50);
scene.add(spotlight);






const loader = new GLTFLoader();
loader.load('f1/scene.gltf', function(gltf){
    scene.add(gltf.scene);
}, undefined, function(error){
    console.error(error);
});

function animate(){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01; 
}
animate();