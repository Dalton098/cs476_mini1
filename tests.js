
function identity(value) {
    return value;
}

/**
 * Given a list of arguments, specified as lists of lists,
 * where the first element in each list is the function to call
 * to construct an object and the second is the parameters to the
 * object, return a list with the constructed objects
 * @param {list} args 
 */
function evalArgs(args) {
    return args.map(function(arg) {
        let fn = eval(arg[0]);
        return fn.apply(null, arg[1]);
    });
}

function prettyvec3(v) {
    try {
        return "vec3(" + v[0].toFixed(2) + ", " + v[1].toFixed(2) + ", " + v[2].toFixed(2) + ")";
    }
    catch {
        return "" + v;
    }
}

function prettyfloat(x) {
    try {
        return x.toFixed(2);
    }
    catch {
        return "" + x;
    }
}

/**
 * Return true if two numbers are near, or false otherwise
 * @param {number} x 
 * @param {number} y 
 */
function nearFloats(x, y) {
    try {
        return eval(x.toFixed(2)) == eval(y.toFixed(2));
    }
    catch(err) {
        return false;
    }
}

/**
 * Return true if vectors are near, or false otherwise
 * @param {vec3} x 
 * @param {vec3} y 
 */
function nearVecs(x, y) {
    try {
        let diff = vec3.create();
        vec3.subtract(diff, x, y);
        let magSqr = vec3.dot(diff, diff);
        let xmagSqr = vec3.dot(x, x);
        let ymagSqr = vec3.dot(y, y);
        if (xmagSqr == 0 && ymagSqr == 0) {
            return true;
        }
        else if (xmagSqr == 0 || ymagSqr == 0) {
            return false;
        }
        else if (magSqr/xmagSqr < 1e-5 && magSqr/ymagSqr < 1e-5) {
            return true;
        }
        else {
            return false;
        }
    }
    catch(err) {
        return false;
    }
}


tests = "[{\"fn\":\"projVector\",\"argnames\":[\"u\",\"v\"],\"argformat\":[\"prettyvec3\",\"prettyvec3\"],\"outputformat\":\"prettyvec3\",\"checkNear\":\"nearVecs\",\"examples\":[{\"args\":[[\"vec3.fromValues\",[1,0,0]],[\"vec3.fromValues\",[0,0,0]]],\"ans\":[\"vec3.fromValues\",[0,0,0]],\"comments\":\"Corner case\"},{\"args\":[[\"vec3.fromValues\",[-1,20,40]],[\"vec3.fromValues\",[-7,9,-9]]],\"ans\":[\"vec3.fromValues\",[5.7393364906311035,-7.379147052764893,7.379147052764893]]},{\"args\":[[\"vec3.fromValues\",[11,33,-26]],[\"vec3.fromValues\",[-31,5,-14]]],\"ans\":[\"vec3.fromValues\",[-4.930625915527344,0.7952622771263123,-2.2267343997955322]]},{\"args\":[[\"vec3.fromValues\",[25,37,11]],[\"vec3.fromValues\",[-41,8,-6]]],\"ans\":[\"vec3.fromValues\",[18.301515579223633,-3.5710275173187256,2.6782705783843994]]},{\"args\":[[\"vec3.fromValues\",[39,20,-28]],[\"vec3.fromValues\",[48,47,-1]]],\"ans\":[\"vec3.fromValues\",[30.199378967285156,29.570226669311523,-0.6291537284851074]]},{\"args\":[[\"vec3.fromValues\",[-4,-45,-49]],[\"vec3.fromValues\",[-22,-31,-12]]],\"ans\":[\"vec3.fromValues\",[-28.67337989807129,-40.40339660644531,-15.64002513885498]]},{\"args\":[[\"vec3.fromValues\",[16,37,-4]],[\"vec3.fromValues\",[1,42,7]]],\"ans\":[\"vec3.fromValues\",[0.8500550985336304,35.70231628417969,5.950386047363281]]},{\"args\":[[\"vec3.fromValues\",[20,-38,-49]],[\"vec3.fromValues\",[-31,-41,46]]],\"ans\":[\"vec3.fromValues\",[8.574191093444824,11.340059280395508,-12.722992897033691]]},{\"args\":[[\"vec3.fromValues\",[27,36,-4]],[\"vec3.fromValues\",[31,13,2]]],\"ans\":[\"vec3.fromValues\",[35.455909729003906,14.868606567382812,2.287477970123291]]},{\"args\":[[\"vec3.fromValues\",[-28,21,-28]],[\"vec3.fromValues\",[-16,-26,-45]]],\"ans\":[\"vec3.fromValues\",[-6.287453651428223,-10.217111587524414,-17.683462142944336]]},{\"args\":[[\"vec3.fromValues\",[-35,22,6]],[\"vec3.fromValues\",[-20,-43,40]]],\"ans\":[\"vec3.fromValues\",[0.03117692843079567,0.0670304000377655,-0.06235385686159134]]}]},{\"fn\":\"projPerpVector\",\"argnames\":[\"u\",\"v\"],\"argformat\":[\"prettyvec3\",\"prettyvec3\"],\"outputformat\":\"prettyvec3\",\"checkNear\":\"nearVecs\",\"examples\":[{\"args\":[[\"vec3.fromValues\",[1,0,0]],[\"vec3.fromValues\",[0,0,0]]],\"ans\":[\"vec3.fromValues\",[0,0,0]],\"comments\":\"Corner case\"},{\"args\":[[\"vec3.fromValues\",[-1,20,40]],[\"vec3.fromValues\",[-7,9,-9]]],\"ans\":[\"vec3.fromValues\",[-6.7393364906311035,27.379146575927734,32.620853424072266]]},{\"args\":[[\"vec3.fromValues\",[11,33,-26]],[\"vec3.fromValues\",[-31,5,-14]]],\"ans\":[\"vec3.fromValues\",[15.930625915527344,32.20473861694336,-23.773265838623047]]},{\"args\":[[\"vec3.fromValues\",[25,37,11]],[\"vec3.fromValues\",[-41,8,-6]]],\"ans\":[\"vec3.fromValues\",[6.698484420776367,40.57102584838867,8.32172966003418]]},{\"args\":[[\"vec3.fromValues\",[39,20,-28]],[\"vec3.fromValues\",[48,47,-1]]],\"ans\":[\"vec3.fromValues\",[8.800621032714844,-9.570226669311523,-27.370845794677734]]},{\"args\":[[\"vec3.fromValues\",[-4,-45,-49]],[\"vec3.fromValues\",[-22,-31,-12]]],\"ans\":[\"vec3.fromValues\",[24.67337989807129,-4.5966033935546875,-33.3599739074707]]},{\"args\":[[\"vec3.fromValues\",[16,37,-4]],[\"vec3.fromValues\",[1,42,7]]],\"ans\":[\"vec3.fromValues\",[15.149945259094238,1.2976837158203125,-9.950386047363281]]},{\"args\":[[\"vec3.fromValues\",[20,-38,-49]],[\"vec3.fromValues\",[-31,-41,46]]],\"ans\":[\"vec3.fromValues\",[11.425808906555176,-49.340057373046875,-36.277008056640625]]},{\"args\":[[\"vec3.fromValues\",[27,36,-4]],[\"vec3.fromValues\",[31,13,2]]],\"ans\":[\"vec3.fromValues\",[-8.455909729003906,21.131393432617188,-6.287477970123291]]},{\"args\":[[\"vec3.fromValues\",[-28,21,-28]],[\"vec3.fromValues\",[-16,-26,-45]]],\"ans\":[\"vec3.fromValues\",[-21.712547302246094,31.217111587524414,-10.316537857055664]]},{\"args\":[[\"vec3.fromValues\",[-35,22,6]],[\"vec3.fromValues\",[-20,-43,40]]],\"ans\":[\"vec3.fromValues\",[-35.03117752075195,21.93297004699707,6.06235408782959]]}]},{\"fn\":\"getAngle\",\"argnames\":[\"a\",\"b\",\"c\"],\"argformat\":[\"prettyvec3\",\"prettyvec3\",\"prettyvec3\"],\"outputformat\":\"prettyfloat\",\"checkNear\":\"nearFloats\",\"examples\":[{\"args\":[[\"vec3.fromValues\",[0,0,0]],[\"vec3.fromValues\",[1,0,0]],[\"vec3.fromValues\",[0,1,0]]],\"ans\":[\"identity\",[90]]},{\"args\":[[\"vec3.fromValues\",[0,0,0]],[\"vec3.fromValues\",[1,0,0]],[\"vec3.fromValues\",[1,1,0]]],\"ans\":[\"identity\",[45]]},{\"args\":[[\"vec3.fromValues\",[0,0,0]],[\"vec3.fromValues\",[-1,0,0]],[\"vec3.fromValues\",[1,1,0]]],\"ans\":[\"identity\",[135]]},{\"args\":[[\"vec3.fromValues\",[0,0,0]],[\"vec3.fromValues\",[-1,0,0]],[\"vec3.fromValues\",[1,0,0]]],\"ans\":[\"identity\",[180]]},{\"args\":[[\"vec3.fromValues\",[0,0,0]],[\"vec3.fromValues\",[0,0,0]],[\"vec3.fromValues\",[1,0,0]]],\"ans\":[\"identity\",[-1]],\"comments\":\"Corner case\"},{\"args\":[[\"vec3.fromValues\",[-32,-34,-18]],[\"vec3.fromValues\",[-13,20,50]],[\"vec3.fromValues\",[-27,20,14]]],\"ans\":[\"identity\",[22.069180036747692]]},{\"args\":[[\"vec3.fromValues\",[-37,13,-35]],[\"vec3.fromValues\",[18,21,-4]],[\"vec3.fromValues\",[-21,5,-24]]],\"ans\":[\"identity\",[30.03289981854043]]},{\"args\":[[\"vec3.fromValues\",[40,-18,8]],[\"vec3.fromValues\",[-49,43,50]],[\"vec3.fromValues\",[-21,-8,7]]],\"ans\":[\"identity\",[33.09172105225666]]},{\"args\":[[\"vec3.fromValues\",[49,-48,-32]],[\"vec3.fromValues\",[45,-23,-41]],[\"vec3.fromValues\",[10,-30,10]]],\"ans\":[\"identity\",[81.88011124694549]]},{\"args\":[[\"vec3.fromValues\",[19,-41,11]],[\"vec3.fromValues\",[49,-28,18]],[\"vec3.fromValues\",[-37,-14,-5]]],\"ans\":[\"identity\",[132.17048263274046]]},{\"args\":[[\"vec3.fromValues\",[-24,-39,48]],[\"vec3.fromValues\",[-26,-10,0]],[\"vec3.fromValues\",[-32,-16,45]]],\"ans\":[\"identity\",[53.083589618290056]]},{\"args\":[[\"vec3.fromValues\",[17,21,-1]],[\"vec3.fromValues\",[27,-47,43]],[\"vec3.fromValues\",[6,-11,-7]]],\"ans\":[\"identity\",[50.01934135905002]]},{\"args\":[[\"vec3.fromValues\",[-18,-34,-37]],[\"vec3.fromValues\",[31,-39,-36]],[\"vec3.fromValues\",[-10,25,-19]]],\"ans\":[\"identity\",[87.84925813751549]]},{\"args\":[[\"vec3.fromValues\",[-27,43,-11]],[\"vec3.fromValues\",[-28,-16,46]],[\"vec3.fromValues\",[21,23,-26]]],\"ans\":[\"identity\",[86.42327815522295]]},{\"args\":[[\"vec3.fromValues\",[21,-22,-23]],[\"vec3.fromValues\",[-28,-16,39]],[\"vec3.fromValues\",[-27,-7,-47]]],\"ans\":[\"identity\",[77.52435657586858]]}]},{\"fn\":\"getTriangleArea\",\"argnames\":[\"a\",\"b\",\"c\"],\"argformat\":[\"prettyvec3\",\"prettyvec3\",\"prettyvec3\"],\"outputformat\":\"prettyfloat\",\"checkNear\":\"nearFloats\",\"examples\":[{\"args\":[[\"vec3.fromValues\",[35,3,-48]],[\"vec3.fromValues\",[11,8,41]],[\"vec3.fromValues\",[-8,49,36]]],\"ans\":[\"identity\",[2095.72887082275]]},{\"args\":[[\"vec3.fromValues\",[46,-11,-42]],[\"vec3.fromValues\",[-17,2,-25]],[\"vec3.fromValues\",[-43,-2,47]]],\"ans\":[\"identity\",[2128.2006484351987]]},{\"args\":[[\"vec3.fromValues\",[-18,46,38]],[\"vec3.fromValues\",[39,-21,18]],[\"vec3.fromValues\",[15,27,-3]]],\"ans\":[\"identity\",[1556.229578179261]]},{\"args\":[[\"vec3.fromValues\",[-3,-18,37]],[\"vec3.fromValues\",[-33,-41,28]],[\"vec3.fromValues\",[15,13,28]]],\"ans\":[\"identity\",[415.053008662749]]},{\"args\":[[\"vec3.fromValues\",[-25,-1,-25]],[\"vec3.fromValues\",[-32,-2,7]],[\"vec3.fromValues\",[-8,-25,-41]]],\"ans\":[\"identity\",[457.029813031929]]},{\"args\":[[\"vec3.fromValues\",[-12,-13,0]],[\"vec3.fromValues\",[0,44,32]],[\"vec3.fromValues\",[-8,34,-4]]],\"ans\":[\"identity\",[886.5235473466004]]},{\"args\":[[\"vec3.fromValues\",[-13,19,23]],[\"vec3.fromValues\",[-25,-18,29]],[\"vec3.fromValues\",[-10,46,24]]],\"ans\":[\"identity\",[146.51791699311045]]},{\"args\":[[\"vec3.fromValues\",[-19,48,12]],[\"vec3.fromValues\",[-29,9,12]],[\"vec3.fromValues\",[-13,-28,-46]]],\"ans\":[\"identity\",[1268.9641444895124]]},{\"args\":[[\"vec3.fromValues\",[28,19,45]],[\"vec3.fromValues\",[-38,-33,-34]],[\"vec3.fromValues\",[3,19,3]]],\"ans\":[\"identity\",[1331.828160837576]]},{\"args\":[[\"vec3.fromValues\",[-23,2,-19]],[\"vec3.fromValues\",[48,9,2]],[\"vec3.fromValues\",[47,34,1]]],\"ans\":[\"identity\",[930.194603295461]]}]},{\"fn\":\"getAboveOrBelow\",\"argnames\":[\"a\",\"b\",\"c\",\"d\"],\"argformat\":[\"prettyvec3\",\"prettyvec3\",\"prettyvec3\",\"prettyvec3\"],\"outputformat\":\"prettyfloat\",\"checkNear\":\"nearFloats\",\"examples\":[{\"args\":[[\"vec3.fromValues\",[0,0,0]],[\"vec3.fromValues\",[1,0,0]],[\"vec3.fromValues\",[2,0,0]],[\"vec3.fromValues\",[1,1,1]]],\"ans\":[\"identity\",[-2]],\"comments\":\"Corner case (points abc are collinear)\"},{\"args\":[[\"vec3.fromValues\",[28,-2,-27]],[\"vec3.fromValues\",[-31,-26,3]],[\"vec3.fromValues\",[-42,9,49]],[\"vec3.fromValues\",[-46,10,-4]]],\"ans\":[\"identity\",[1]]},{\"args\":[[\"vec3.fromValues\",[41,29,-31]],[\"vec3.fromValues\",[-44,-50,-26]],[\"vec3.fromValues\",[14,-18,7]],[\"vec3.fromValues\",[-9,26,-17]]],\"ans\":[\"identity\",[1]]},{\"args\":[[\"vec3.fromValues\",[-31,26,-6]],[\"vec3.fromValues\",[-45,35,13]],[\"vec3.fromValues\",[-50,-37,30]],[\"vec3.fromValues\",[40,0,13]]],\"ans\":[\"identity\",[1]]},{\"args\":[[\"vec3.fromValues\",[-33,10,33]],[\"vec3.fromValues\",[47,-24,43]],[\"vec3.fromValues\",[8,35,-25]],[\"vec3.fromValues\",[16,8,-35]]],\"ans\":[\"identity\",[-1]]},{\"args\":[[\"vec3.fromValues\",[10,23,12]],[\"vec3.fromValues\",[-48,2,6]],[\"vec3.fromValues\",[-14,-32,43]],[\"vec3.fromValues\",[-28,-29,1]]],\"ans\":[\"identity\",[-1]]},{\"args\":[[\"vec3.fromValues\",[24,-14,-20]],[\"vec3.fromValues\",[-20,46,22]],[\"vec3.fromValues\",[-40,-16,35]],[\"vec3.fromValues\",[23,48,-15]]],\"ans\":[\"identity\",[-1]]},{\"args\":[[\"vec3.fromValues\",[-17,-45,-11]],[\"vec3.fromValues\",[35,29,13]],[\"vec3.fromValues\",[-6,-35,-35]],[\"vec3.fromValues\",[23,-29,-41]]],\"ans\":[\"identity\",[-1]]},{\"args\":[[\"vec3.fromValues\",[12,37,26]],[\"vec3.fromValues\",[-23,-33,-16]],[\"vec3.fromValues\",[38,-48,-34]],[\"vec3.fromValues\",[-31,-9,44]]],\"ans\":[\"identity\",[1]]},{\"args\":[[\"vec3.fromValues\",[-2,-20,6]],[\"vec3.fromValues\",[-12,38,29]],[\"vec3.fromValues\",[-34,13,37]],[\"vec3.fromValues\",[20,-17,-1]]],\"ans\":[\"identity\",[1]]},{\"args\":[[\"vec3.fromValues\",[20,-38,4]],[\"vec3.fromValues\",[-3,37,29]],[\"vec3.fromValues\",[42,35,13]],[\"vec3.fromValues\",[23,1,-37]]],\"ans\":[\"identity\",[1]]}]}]";

tests = JSON.parse(tests);