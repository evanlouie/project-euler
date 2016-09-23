import { AbstractEulerProblem } from "./EulerProblem";

export default class EulerProblem5 extends AbstractEulerProblem {

    public problemNumber = 5;
    public question = `
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?`;

    public answer = () => {
        const isDivisible = (n: number, from: number, to: number): boolean => {
            let divisible = true;
            for (let x: number = from; x <= to; x++) {
                if (n % x !== 0) {
                    divisible = false;
                }
            }

            return divisible;
        };

        let smallestPositive = 0;
        let currentNumber = 0;

        while (smallestPositive === 0) {
            currentNumber++;
            if (isDivisible(currentNumber, 1, 20)) {
                smallestPositive = currentNumber;
            }
        }

        return smallestPositive.toString();
    }
}
