"use strict";
const EulerProblem_1 = require("./EulerProblem");
class EulerProblem1 extends EulerProblem_1.AbstractEulerProblem {
    constructor(...args) {
        super(...args);
        this.problemNumber = 1;
        this.question = `
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.`;
    }
    isMultipleOf3or5(n) {
        return n % 3 === 0 || n % 5 === 0;
    }
    answer() {
        let sum = 0;
        for (let n = 0; n < 1000; n++) {
            if (this.isMultipleOf3or5(n)) {
                sum += n;
            }
        }
        return sum.toString();
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EulerProblem1;
