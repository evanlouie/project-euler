"use strict";
const EulerProblem_1 = require("./EulerProblem");
class EulerProblem10 extends EulerProblem_1.AbstractEulerProblem {
    constructor() {
        super(...arguments);
        this.problemNumber = 10;
        this.question = `
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.`;
        this.answer = () => {
            // Return if n is a prime number or not using trial division
            const isPrime = (n) => {
                let divisor = 2;
                while (divisor <= Math.sqrt(n)) {
                    if (n % divisor === 0) {
                        return false;
                    }
                    divisor++;
                }
                return n > 1;
            };
            const sumOfPrimesUnderTwoMillion = Array(2000000).fill(0).map((value, index) => {
                // fill array with 1 - 2000000
                return index + 1;
            }).filter((value) => {
                // filter out non prime
                return isPrime(value);
            }).reduce((sum, curr) => {
                // reduce primes to sum
                sum += curr;
                return sum;
            }, 0);
            return sumOfPrimesUnderTwoMillion.toString();
        };
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EulerProblem10;
