import {AbstractEulerProblem} from "./EulerProblem";

export default class EulerProblem6 extends AbstractEulerProblem {

    problemNumber = 6;
    question = `
    The sum of the squares of the first ten natural numbers is,

    1^2 + 2^2 + ... + 10^2 = 385
    The square of the sum of the first ten natural numbers is,

    (1 + 2 + ... + 10)^2 = 55^2 = 3025

    Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

    Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
    `;

    sumOfSquares(n: number): number {
        let sum = 0;

        for (let x = 0; x <= n; x++) {
            sum = sum + (x * x);
        }

        return sum;
    }

    squareOfSum(n: number): number {
        let sum = 0;

        for (let x = 0; x <= n; x++) {
            sum = sum + x;
        }

        return sum * sum;
    }

    answer() {
        const sumOfSquares = this.sumOfSquares(100);
        const squareOfSum = this.squareOfSum(100);

        return (squareOfSum - sumOfSquares).toString();
    }

}
