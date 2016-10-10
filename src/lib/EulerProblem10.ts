import { AbstractEulerProblem } from "./EulerProblem";

export interface ICombination {
    a: number;
    b: number;
    c: number;
}

export default class EulerProblem10 extends AbstractEulerProblem {

    public problemNumber = 10;
    public question = `
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.`;

    public answer = () => {
        // Return if n is a prime number or not using trial division
        const isPrime = (n: number): boolean => {
            let divisor = 2;
            while (divisor <= Math.sqrt(n)) {
                if (n % divisor === 0) {
                    return false;
                }
                divisor++;
            }

            return n > 1;
        };

        const sumOfPrimesUnderTwoMillion: number = Array(2000000).fill(0).map((value, index) => {
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
    }
}
