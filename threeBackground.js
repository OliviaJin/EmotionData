import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer, model;
let mouseX = 0, mouseY = 0;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load('smiling.glb', (gltf) => {
        model = gltf.scene;
        model.scale.set(7, 7, 7);
        scene.add(model);
    });

    const light = new THREE.PointLight(0xFFFFFF, 1);
    light.position.set(0, 0, 10);
    scene.add(light);

    camera.position.z = 5;

    document.addEventListener('mousemove', onDocumentMouseMove, false);

    animate();
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = - (event.clientY / window.innerHeight) * 2 + 1;
}

function animate() {
    requestAnimationFrame(animate);

    if (model) {
        model.rotation.x = - mouseY;
        model.rotation.y = mouseX;
    }

    renderer.render(scene, camera);
}

init();
