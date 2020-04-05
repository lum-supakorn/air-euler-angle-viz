// Set up scence and camera
var scene = new THREE.Scene();
THREE.Object3D.DefaultUp.set(0, 0, -1); // Change default coordinate frame to NED
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( -20, 25, -20 );

// Set up renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Set up OrbitControls
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.update();

// Set up grid helper
let grid_helper = new THREE.GridHelper( 1200, 60, 0, 0x404040 );
grid_helper.rotateX(Math.PI / 2); // NED
scene.add( grid_helper );

// Set up arrow helper
var axesHelper = new THREE.AxesHelper(10);
scene.add( axesHelper );
