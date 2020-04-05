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
var x_dir = new THREE.Vector3( 10, 0, 0 );
var y_dir = new THREE.Vector3( 0, 10, 10 );
var z_dir = new THREE.Vector3( 0, 0, 10 );
var origin = new THREE.Vector3( 0, 0, 0 );
var length = 15;
var x_arrow = new THREE.ArrowHelper( x_dir, origin, length, 0xFF0000 );
var y_arrow = new THREE.ArrowHelper( y_dir, origin, length, 0x00FF00 );
var z_arrow = new THREE.ArrowHelper( z_dir, origin, length, 0x0000FF );
scene.add( x_arrow, y_arrow, z_arrow );
