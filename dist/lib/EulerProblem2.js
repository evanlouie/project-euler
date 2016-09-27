"use strict";
const EulerProblem_1 = require("./EulerProblem");
class EulerProblem2 extends EulerProblem_1.AbstractEulerProblem {
    constructor() {
        super(...arguments);
        this.problemNumber = 2;
        this.question = `
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.`;
        // Check to see if the first 10 Fibonacci numbers match what"s defined in the question
        // public fibTest(): boolean {
        //     const fibs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => this.fib(n));
        //
        //     // As defined by question
        //     return fibs.toString() === [1, 2, 3, 5, 8, 13, 21, 34, 55, 89].toString();
        // }
        // Iterate up from fib(n)<=4000000 and calculate running sum if fib(n) is even
        this.answer = () => {
            const memory = [];
            let runningSum = 0;
            // Find the nth Fibonacci number
            const fib = (n) => {
                return (function foo(bar) {
                    // No negative nth Fibonacci number
                    if (bar <= 2) {
                        memory[bar] = bar;
                    }
                    // Memoize
                    if (typeof memory[bar] === "undefined") {
                        memory[bar] = foo(bar - 1) + foo(bar - 2);
                    }
                    return memory[bar];
                })(n);
            };
            for (let n = 0; fib(n) <= 4000000; n++) {
                // If even; add
                if (fib(n) % 2 === 0) {
                    runningSum = runningSum + fib(n);
                }
            }
            return runningSum.toString();
        };
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EulerProblem2;
