function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    controls.update();

    if (model) {
        // Position control
        // model.rotation.z += 0.01;
        // model.position.y = y_pos_slider.value;
        // model.position.z = z_pos_slider.value;
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