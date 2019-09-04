//Purpose: The engine behind the 3D primitive operations for Mini Assignment 1

vec3 = glMatrix.vec3;

//////////////////////////////////////////////
///********    Geometry Functions   *******///
//////////////////////////////////////////////
//This is where you will have to fill in some code

/**
 * Project vector u onto vector v using the glMatrix library
 * @param {vec3} u Vector that's being projected
 * @param {vec3} v Vector onto which u is projected
 * 
 * @return {vec3} The projection of u onto v
 */
function projVector(u, v) {

    if (v[0] === 0 && v[1] === 0 && v[2] === 0) {
        return vec3.fromValues(0,0,0);
    }

    uDotv = vec3.dot(u, v);
    vDotv = vec3.dot(v, v);

    projection = vec3.create();

    scalar = uDotv / vDotv;

    vec3.scale(projection, v, scalar);

    return projection;
}


/**
 * 
 * @param {vec3} u Vector that's being projected
 * @param {vec3} v Vector onto which u is perpendicularly projected
 * 
 * @return {vec3} The perpendicular projection of u onto v
 */
function projPerpVector(u, v) {

    paraProjection = projVector(u, v);

    perpProjection = vec3.create();

    vec3.subtract(perpProjection, u, paraProjection);

    return perpProjection;
}


/**
 * Compute the angle between the vectors ab and ac
 * @param {vec3} a First point
 * @param {vec3} b Second point
 * @param {vec3} c Third point
 * 
 * @return {float} Angle between vectors ab and ac in degrees
 */
function getAngle(a, b, c) {

    let ab = vec3.create();
    let ac = vec3.create();

    vec3.subtract(ab, b, a);
    vec3.subtract(ac, c, a);

    abDotac = vec3.dot(ab, ac);

    abMag = Math.sqrt(vec3.dot(ab, ab));
    acMag = Math.sqrt(vec3.dot(ac, ac));

    almostAngle = abDotac / (abMag * acMag);

    if (almostAngle < -1) {
        almostAngle = -1;
    } else if (almostAngle > 1) {
        almostAngle = 1;
    }

    angle = Math.acos(almostAngle);

    angle = angle * (180 / Math.PI);

    return angle;
}

/**
 * Given three 3D vertices a, b, and c, compute the area 
 * of the triangle they span
 * @param {vec3} a First point
 * @param {vec3} b Second point
 * @param {vec3} c Third point
 * 
 * @return {float} Area of the triangle
 */
function getTriangleArea(a, b, c) {

    let ab = vec3.create();
    let ac = vec3.create();

    vec3.subtract(ab, b, a);
    vec3.subtract(ac, c, a);

    crossProduct = vec3.create();

    vec3.cross(crossProduct, ab, ac)

    magCrossProduct = Math.sqrt(vec3.dot(crossProduct, crossProduct));

    area = (1 / 2) * magCrossProduct;

    return area;
}

/**
 * For a plane determined by the points a, b, and c, with the plane
 * normal determined by those points in counter-clockwise order using 
 * the right hand rule, decide whether the point d is above, below, or on the plane
 * @param {vec3} a First point on plane
 * @param {vec3} b Second point on plane
 * @param {vec3} c Third point on plane
 * @param {vec} d Test point
 * 
 * @return {int} 1 if d is above, -1 if d is below, 0 if d is on
 */
function getAboveOrBelow(a, b, c, d) {

    let ab = vec3.create();
    let ac = vec3.create();
    let ad = vec3.create();

    vec3.subtract(ab, b, a);
    vec3.subtract(ac, c, a);
    vec3.subtract(ad, d, a);

    crossProduct = vec3.create();

    vec3.cross(crossProduct, ab, ac)

    dotProduct = vec3.dot(crossProduct, ad);

    if (dotProduct < 0) {
        toReturn = -1;
    } else if (dotProduct > 0) {
        toReturn = 1;
    } else {
        toReturn = 0;
    }

    return toReturn;
}


function rayIntersectCircle(p0, v, c, r) {

}


///////////////////////////////////////////////////////////////////
///********           Plotting Utilities                 *******///
///////////////////////////////////////////////////////////////////

//This is code that Chris Tralie has written in to help plot the results
//for help debugging.  Feel free to browse the code to see how plot.ly works
//and ask any questions on the forum

//This is the way I hack the axes to be equal
function getAxesEqual(vs) {
    //Determine the axis ranges
    minval = 0;
    maxval = 0;
    for (var i = 0; i < vs.length; i++) {
        for (var j = 0; j < 3; j++) {
            if (vs[i][j] < minval) { minval = vs[i][j]; }
            if (vs[i][j] > maxval) { maxval = vs[i][j]; }
        }
    }
    return {
        x: {
            x: [minval, maxval], y: [0, 0], z: [0, 0],
            mode: 'lines', line: { color: '#000000', width: 1 }, type: 'scatter3d', name: 'xaxis'
        },
        y: {
            x: [0, 0], y: [minval, maxval], z: [0, 0],
            mode: 'lines', line: { color: '#000000', width: 1 }, type: 'scatter3d', name: 'yaxis'
        },
        z: {
            x: [0, 0], y: [0, 0], z: [minval, maxval],
            mode: 'lines', line: { color: '#000000', width: 1 }, type: 'scatter3d', name: 'zaxis'
        }
    };
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        X: evt.clientX - rect.left,
        Y: evt.clientY - rect.top
    };
}


