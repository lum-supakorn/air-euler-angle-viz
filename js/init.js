// Set up scence and camera
var scene = new THREE.Scene();
THREE.Object3D.DefaultUp.set(0, 0, -1); // Change default coordinate frame to NED
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( -5, 10, -5 );

// Set up renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Set up OrbitControls
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.update();

// // Set up grid helper
var size = 1200;
var divisions = 300;
var gridHelper = new THREE.GridHelper( size, divisions, 0, 0x404040 );
gridHelper.rotateX(Math.PI / 2); // NED
scene.add( gridHelper );

// Set up arrow helper
var axesHelper = new THREE.AxesHelper(10);
scene.add( axesHelper );
