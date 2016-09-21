import {AbstractEulerProblem} from "./EulerProblem";

export default class EulerProblem3 extends AbstractEulerProblem {

    problemNumber = 3;
    question = `
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?`;

    /**
     * Find primeness of a number
     * @link https://en.wikipedia.org/wiki/Prime_number#Trial_division
     */
    isPrime(n: number): boolean {
        let start = 2;
        while (start <= Math.sqrt(n)) {
            if (n % start++ < 1) {
                return false;
            }
        }

        return n > 1;
    }

    /**
     * Perform prime decomposition
     * @link https://en.wikipedia.org/wiki/Prime_factor
     * @link https://en.wikipedia.org/wiki/Integer_factorization
     */
    primeFactors(n: number): number[] {
        let factors: number[] = [];
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
    }

    answer() {
        let primeFactors = this.primeFactors(600851475143);

        return primeFactors[primeFactors.length - 1].toString();
    }
}
