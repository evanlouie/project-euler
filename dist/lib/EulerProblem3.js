"use strict";
const EulerProblem_1 = require("./EulerProblem");
class EulerProblem3 extends EulerProblem_1.AbstractEulerProblem {
    constructor(...args) {
        super(...args);
        this.problemNumber = 3;
        this.question = `
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?`;
        this.answer = () => {
            const primeFactors = (n) => {
                let factors = [];
                let denominator = 2;
                while (n > 1) {
                    while (n % denominator === 0) {
                        factors.push(denominator);
                        n /= denominator;
                    }
                    denominator += 1;
                }
                return factors;
            };
            const factors = primeFactors(600851475143);
            return factors[factors.length - 1].toString();
        };
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EulerProblem3;
