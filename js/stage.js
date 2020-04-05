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
var geometry = new THREE.SphereBufferGeometry( 0.2, 32, 32 );
var material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var originPoint = new THREE.Mesh( geometry, material );
scene.add( originPoint );

// Plane pivot
planePivot = new THREE.Group();
originPoint.add( planePivot )

// Plane
var onProgress = function ( xhr ) {
    if ( xhr.lengthComputable ) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
    }
};

var onError = function () { };

var manager = new THREE.LoadingManager();
manager.addHandler( /\.dds$/i, new THREE.DDSLoader() );

var model;

new THREE.MTLLoader( manager )
    .setPath( '../model/' )
    .load( '14081_WWII_Plane-Germany_Focke-Wulf_FW_190_v1_l3.mtl', function ( materials ) {
    materials.preload();
    new THREE.OBJLoader( manager )
        .setMaterials( materials )
        .setPath( '../model/' )
        .load( '14081_WWII_Plane-Germany_Focke-Wulf_FW_190_v1_l3.obj', function ( model ) {
            model.rotation.x = Math.PI;
            scene.add( model );
        }, onProgress, onError );
} );
