"use strict";
const EulerProblem_1 = require("./EulerProblem");
class EulerProblem9 extends EulerProblem_1.AbstractEulerProblem {
    constructor() {
        super(...arguments);
        this.problemNumber = 9;
        this.question = `
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.`;
        this.answer = () => {
            const isPythagTriple = (a, b, c) => {
                return (a < b && b < c) && (a * a + b * b === c * c);
            };
            const isValidA = (a, b, c) => {
                return (a < b && a < c);
            };
            const isValidB = (a, b, c) => {
                return (a > b && b < c);
            };
            const isValidC = (a, b, c) => {
                return (c > a && c > b);
            };
            const generateCombinations = (maxC) => {
                const range = (start, end) => {
                    return Array(end - start + 1).fill(0).map((_, index) => start + index);
                };
                const combinations = range(0, maxC).map((c, index, array) => {
                });
                return combinations;
            };
            return "WIP";
        };
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EulerProblem9;
