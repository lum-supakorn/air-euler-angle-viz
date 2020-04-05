function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    controls.update();

    if (plane) {
        // Linear
        // Position
        plane.position.x = options.linear.x;
        plane.position.y = options.linear.y;
        plane.position.z = options.linear.z;

        // Angular
        // Attitude rates
        planePivot.rotation.x += deg2rad(options.angular.phid);
        planePivot.rotation.y += deg2rad(options.angular.thetad);
        planePivot.rotation.z += deg2rad(options.angular.psid);
        // Body rates
        plane.rotation.x += deg2rad(options.angular.p);
        plane.rotation.y += -deg2rad(options.angular.q);
        plane.rotation.z += -deg2rad(options.angular.r);
    }
}
animate();