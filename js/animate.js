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
        // // Angle control
        // // plane_pivot.rotation.x = deg2rad(phi_slider.value);
        // // plane_pivot.rotation.z = deg2rad(theta_slider.value);
        // // plane_pivot.rotation.y = deg2rad(psi_slider.value);
        // // Body angular rate control
        // model.rotation.x += deg2rad(p_slider.value);
        // model.rotation.z += -deg2rad(q_slider.value);
        // model.rotation.y += -deg2rad(r_slider.value);
        // // Attitude angular rate control
        // plane_pivot.rotation.x += deg2rad(phi_d_slider.value);
        // plane_pivot.rotation.z += deg2rad(theta_d_slider.value);
        // plane_pivot.rotation.y += -deg2rad(psi_d_slider.value);
    }
}
animate();