// Light
var light = new THREE.AmbientLight( 0xFFFFFF ); // soft white light
scene.add( light );
let ambientLight = new THREE.AmbientLight( 0x404040 );
scene.add( ambientLight );

// Origin point
var geometry = new THREE.SphereBufferGeometry( 0.2, 32, 32 );
var material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
var originPoint = new THREE.Mesh( geometry, material );
scene.add( originPoint );

// Plane pivots
planePivot = new THREE.Group();
originPoint.add( planePivot )

// World axis
var dirX = new THREE.Vector3( -1, 0, 0 );
var dirY = new THREE.Vector3( 0, 1, 0 );
var dirZ = new THREE.Vector3( 0, 0, -1 );

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

var plane;

new THREE.MTLLoader( manager )
    .setPath( '../model/' )
    .load( '14081_WWII_Plane-Germany_Focke-Wulf_FW_190_v1_l3.mtl', function ( materials ) {
    materials.preload();
    new THREE.OBJLoader( manager )
        .setMaterials( materials )
        .setPath( '../model/' )
        .load( '14081_WWII_Plane-Germany_Focke-Wulf_FW_190_v1_l3.obj', function ( model ) {
            plane = model;
            model.rotation.x = Math.PI;
            model.rotation.z = Math.PI;
            planePivot.add( model );

            // Add body-fixed axes
            var origin = new THREE.Vector3( 0, 0, 0 );
            var length = 5;
            var bodyAxisX = new THREE.ArrowHelper( dirX, origin, length, 0xFF0000 );
            var bodyAxisY = new THREE.ArrowHelper( dirY, origin, length, 0x00FF00 );
            var bodyAxisZ = new THREE.ArrowHelper( dirZ, origin, length, 0x0000FF );
            model.add( bodyAxisX );
            model.add( bodyAxisY );
            model.add( bodyAxisZ );

        }, onProgress, onError );
} );