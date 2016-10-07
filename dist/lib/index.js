"use strict";
const EulerProblem1_1 = require("./EulerProblem1");
const EulerProblem2_1 = require("./EulerProblem2");
const EulerProblem3_1 = require("./EulerProblem3");
const EulerProblem4_1 = require("./EulerProblem4");
const EulerProblem5_1 = require("./EulerProblem5");
const EulerProblem6_1 = require("./EulerProblem6");
const EulerProblem7_1 = require("./EulerProblem7");
const EulerProblem8_1 = require("./EulerProblem8");
const EulerProblem9_1 = require("./EulerProblem9");
function getProblems() {
    return [
        new EulerProblem1_1.default(),
        new EulerProblem2_1.default(),
        new EulerProblem3_1.default(),
        new EulerProblem4_1.default(),
        new EulerProblem5_1.default(),
        new EulerProblem6_1.default(),
        new EulerProblem7_1.default(),
        new EulerProblem8_1.default(),
        new EulerProblem9_1.default(),
    ];
}
exports.getProblems = getProblems;
