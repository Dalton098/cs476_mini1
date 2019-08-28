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
    //TODO: Fill this in for task 1
}


/**
 * 
 * @param {vec3} u Vector that's being projected
 * @param {vec3} v Vector onto which u is perpendicularly projected
 * 
 * @return {vec3} The perpendicular projection of u onto v
 */
function projPerpVector(u, v) {
    //TODO: Fill this in for task 1
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
    //TODO: Fill this in for task 2
    return -1; //This is a dummy value for now.  Replace with true angle
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
    //TODO: Fill this in for task 3
    return -1; //This is a dummy value for now.  Replace with true area
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
    //TODO: Fill this in for task 4
    return 0; //This is a dummy value for now.  Replace with the actual indicator
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
            if (vs[i][j] < minval){ minval = vs[i][j]; }
            if (vs[i][j] > maxval){ maxval = vs[i][j]; }
        }
    }
    return {
    x:{ x: [minval, maxval], y: [0, 0], z: [0, 0],
      mode: 'lines', line: {color: '#000000', width: 1}, type: 'scatter3d', name:'xaxis'
    },
    y:{ x: [0, 0], y: [minval, maxval], z: [0, 0],
      mode: 'lines', line: {color: '#000000', width: 1}, type: 'scatter3d', name:'yaxis'
    },
    z:{ x: [0, 0], y: [0, 0], z: [minval, maxval],
      mode: 'lines', line: {color: '#000000', width: 1}, type: 'scatter3d', name:'zaxis'
    }};
}

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
	    X: evt.clientX - rect.left,
	    Y: evt.clientY - rect.top
	};
}


