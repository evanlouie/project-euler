"use strict";
const EulerProblem_1 = require("./EulerProblem");
class EulerProblem7 extends EulerProblem_1.AbstractEulerProblem {
    constructor() {
        super(...arguments);
        this.problemNumber = 7;
        this.question = `
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?`;
        this.answer = () => {
            /**
             * Find primeness of a number
             * @link https://en.wikipedia.org/wiki/Prime_number#Trial_division
             */
            const isPrime = (n) => {
                let start = 2;
                while (start <= Math.sqrt(n)) {
                    if (n % start++ < 1) {
                        return false;
                    }
                }
                return n > 1;
            };
            let nthPrimeNumber = 0;
            let currentNumber = 0;
            while (nthPrimeNumber !== 10001) {
                currentNumber++;
                if (isPrime(currentNumber)) {
                    nthPrimeNumber++;
                }
            }
            return currentNumber.toString();
        };
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EulerProblem7;
