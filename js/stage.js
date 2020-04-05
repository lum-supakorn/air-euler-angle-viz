// Light
var light = new THREE.AmbientLight( 0xFFFFFF ); // soft white light
scene.add( light );

let ambientLight = new THREE.AmbientLight( 0x404040 );
let directionalLight1 = new THREE.DirectionalLight( 0xC0C090 );
let directionalLight2 = new THREE.DirectionalLight( 0xC0C090 );

directionalLight1.position.set( -100, -50, 100 );
directionalLight2.position.set( 100, 50, -100 );

scene.add( directionalLight1 );
scene.add( directionalLight2 );
scene.add( ambientLight );

// Origin point
var geometry = new THREE.SphereBufferGeometry( 0.5, 32, 32 );
var material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var origin_pt = new THREE.Mesh( geometry, material );
scene.add( origin_pt );

// Plane pivot
plane_pivot = new THREE.Group();
origin_pt.add(plane_pivot)

// Plane
var loader = new THREE.GLTFLoader();
var model;
loader.load( 'model/plane.gltf', function ( gltf ) {
    model = gltf.scene;
    model.rotation.x = -Math.PI/2; // Reset model
    // model.rotation.z = Math.PI; // Reset model
    plane_pivot.add( model );
}, undefined, function ( error ) {
    console.error( error );
} );