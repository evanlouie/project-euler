import {AbstractEulerProblem} from "./EulerProblem";

export default class EulerProblem5 extends AbstractEulerProblem {

    problemNumber = 5;
    question = `
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?`;

    isDivisible(n: number, from: number, to: number): boolean {
        let isDivisible = true;
        for (let x: number = from; x <= to; x++) {
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
