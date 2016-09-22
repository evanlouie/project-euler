"use strict";
const EulerProblem_1 = require("./EulerProblem");
class EulerProblem5 extends EulerProblem_1.AbstractEulerProblem {
    constructor(...args) {
        super(...args);
        this.problemNumber = 5;
        this.question = `
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?`;
    }
    isDivisible(n, from, to) {
        let isDivisible = true;
        for (let x = from; x <= to; x++) {
            if (n % x !== 0) {
                isDivisible = false;
            }
        }
        return isDivisible;
    }
    answer() {
        let smallestPositive = 0;
        let found = false;
        let currentNumber = 0;
        while (smallestPositive === 0) {
            currentNumber++;
            if (this.isDivisible(currentNumber, 1, 20)) {
                smallestPositive = currentNumber;
            }
        }
        return smallestPositive.toString();
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EulerProblem5;
