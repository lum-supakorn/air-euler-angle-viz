var options = {
    linear: {
        x: 0,
        y: 0,
        z: 0,
        resetPos: function() {
            this.x = 0;
            this.y = 0;
            this.z = 0;
        },
        u: 0,
        v: 0,
        w: 0,
    },
    angular: {
        phi: 0,
        theta: 0,
        psi: 0,
        resetAtt: function() {
            this.phi = 0;
            this.theta = 0;
            this.psi = 0;
        },
        phid: 0,
        thetad: 0,
        psid: 0,
        resetAttRate: function() {
            this.phid = 0;
            this.thetad = 0;
            this.psid = 0;
        },
        p: 0,
        q: 0,
        r: 0,
        resetBodyRate: function() {
            this.p = 0;
            this.q = 0;
            this.r = 0;
        },
    }
};

// DAT GUI
var gui = new dat.GUI();

// Linear properties
var linearProp = gui.addFolder('Linear');
// Linear position
linearProp.add(options.linear, 'x', -50, 50).name('\\(x\\)');
linearProp.add(options.linear, 'y', -50, 50).name('\\(y\\)');
linearProp.add(options.linear, 'z', -50, 50).name('\\(z\\)');
linearProp.add(
    { setPos:function(){ plane.position.set(
        options.linear.x,
        options.linear.y,
        options.linear.z,
    )}},
    'setPos'
).name('Set position');
linearProp.add(
    { resetPos:function(){ plane.position.set(
        0,
        0,
        0,
    )}},
    'resetPos'
).name('Reset position');
linearProp.add(options.linear, 'u', -50, 50).name('\\(u\\)');
linearProp.add(options.linear, 'v', -50, 50).name('\\(v\\)');
linearProp.add(options.linear, 'w', -50, 50).name('\\(w\\)');
linearProp.open();

// Angular properties
var angularProp = gui.addFolder('Angular');
// Attitude
angularProp.add(options.angular, 'phi', -180, 180, 0.5).name('\\(\\phi\\) {deg}');
angularProp.add(options.angular, 'theta', -180, 180, 0.5).name('\\(\\theta\\) {deg}');
angularProp.add(options.angular, 'psi', -180, 180, 0.5).name('\\(\\psi\\) {deg}');
angularProp.add(
    { setAtt:function(){ planePivot.rotation.set(
        deg2rad(options.angular.phi),
        deg2rad(options.angular.theta),
        deg2rad(options.angular.psi),
    )}},
    'setAtt'
).name('Set attitude');
angularProp.add(
    { resetAtt:function(){ planePivot.rotation.set(
        0,
        0,
        0,
    )}},
    'resetAtt'
).name('Reset attitude');
// Angular velocity
angularProp.add(options.angular, 'phid', -90, 90, 0.5).name('\\(\\dot{\\phi}\\) {deg/s}');
angularProp.add(options.angular, 'thetad', -90, 90, 0.5).name('\\(\\dot{\\theta}\\) {deg/s}');
angularProp.add(options.angular, 'psid', -90, 90, 0.5).name('\\(\\dot{\\psi}\\) {deg/s}');
angularProp.add(options.angular, 'resetAttRate').name('Reset attitude rate');
angularProp.add(options.angular, 'p', -90, 90, 0.5).name('\\(p\\) {deg/s}');
angularProp.add(options.angular, 'q', -90, 90, 0.5).name('\\(q\\) {deg/s}');
angularProp.add(options.angular, 'r', -90, 90, 0.5).name('\\(r\\) {deg/s}');
angularProp.add(options.angular, 'resetBodyRate').name('Reset body rate');
angularProp.open();