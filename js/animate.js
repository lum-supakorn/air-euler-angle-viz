var clock = new THREE.Clock();
var delta;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    controls.update();

    if (plane) {
        delta = clock.getDelta();
        // Linear


        // Angular
        // Attitude rates
        planePivot.rotateOnWorldAxis(dirX, -deg2rad(options.angular.phid) * delta);
        planePivot.rotateOnWorldAxis(dirY, deg2rad(options.angular.thetad) * delta);
        planePivot.rotateOnWorldAxis(dirZ, -deg2rad(options.angular.psid) * delta);
        // Body rates
        plane.rotation.x += deg2rad(options.angular.p) * delta;
        plane.rotation.y += -deg2rad(options.angular.q) * delta;
        plane.rotation.z += -deg2rad(options.angular.r) * delta;
    }
}

animate();