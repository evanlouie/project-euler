import { AbstractEulerProblem } from "./EulerProblem";
export default class EulerProblem3 extends AbstractEulerProblem {
    constructor() {
        super(...arguments);
        this.problemNumber = 3;
        this.question = `
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?`;
        this.answer = () => {
            /**
             * Perform prime decomposition
             * @link https://en.wikipedia.org/wiki/Prime_factor
             * @link https://en.wikipedia.org/wiki/Integer_factorization
             */
            const primeFactors = (n) => {
                let factors = [];
                // start by dividing by 2
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
