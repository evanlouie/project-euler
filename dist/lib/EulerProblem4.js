"use strict";
const EulerProblem_1 = require("./EulerProblem");
class EulerProblem4 extends EulerProblem_1.AbstractEulerProblem {
    constructor(...args) {
        super(...args);
        this.problemNumber = 4;
        this.question = `
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.`;
    }
    isPalindromic(n) {
        const asString = n.toString();
        return asString === asString.split("").reverse().join("");
    }
    answer() {
        let largestPalendrome = 0;
        for (let x = 100; x < 1000; x++) {
            for (let y = 100; y < 1000; y++) {
                const product = x * y;
                if (this.isPalindromic(product)) {
                    largestPalendrome = product;
                }
            }
        }
        return largestPalendrome.toString();
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EulerProblem4;
