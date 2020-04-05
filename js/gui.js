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
linearProp.add(options.linear, 'resetPos').name('Reset position');
linearProp.open();

// Angular properties
var angularProp = gui.addFolder('Angular');
// Attitude
angularProp.add(options.angular, 'phi', -180, 180, 0.5).name('\\(\\phi\\)');
angularProp.add(options.angular, 'theta', -180, 180, 0.5).name('\\(\\theta\\)');
angularProp.add(options.angular, 'psi', -180, 180, 0.5).name('\\(\\psi\\)');
var obj = { add:function(){ planePivot.rotation.set(
    deg2rad(options.angular.phi),
    deg2rad(options.angular.theta),
    deg2rad(options.angular.psi),
)}};
angularProp.add(obj, 'add').name('Set attitude');
// Angular velocity
angularProp.add(options.angular, 'phid', -10, 10, 0.5).name('\\(\\dot{\\phi}\\)');
angularProp.add(options.angular, 'thetad', -10, 10, 0.5).name('\\(\\dot{\\theta}\\)');
angularProp.add(options.angular, 'psid', -10, 10, 0.5).name('\\(\\dot{\\psi}\\)');
angularProp.add(options.angular, 'resetAttRate').name('Reset attitude rate');
angularProp.add(options.angular, 'p', -10, 10, 0.5).name('\\(p\\)');
angularProp.add(options.angular, 'q', -10, 10, 0.5).name('\\(q\\)');
angularProp.add(options.angular, 'r', -10, 10, 0.5).name('\\(r\\)');
angularProp.add(options.angular, 'resetBodyRate').name('Reset body rate');
angularProp.open();