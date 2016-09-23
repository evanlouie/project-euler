import { AbstractEulerProblem } from "./EulerProblem";

export default class EulerProblem4 extends AbstractEulerProblem {

    public problemNumber = 4;
    public question = `
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.`;

    /**
     * Iterate over a 2 levels of nested for loop checking the product of their variable
     * @complexity O(n^2)
     */
    public answer = (): string => {
        const isPalindromic = (n: number): boolean => {
            const asString = n.toString();
            return asString === asString.split("").reverse().join("");
        };

        let largestPalendrome = 0;

        for (let x = 100; x < 1000; x++) {
            for (let y = 100; y < 1000; y++) {
                const product = x * y;
                if (isPalindromic(product)) {
                    largestPalendrome = product;
                }
            }
        }

        return largestPalendrome.toString();
    }
}
