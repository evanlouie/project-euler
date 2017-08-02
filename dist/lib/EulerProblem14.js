"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EulerProblem_1 = require("./EulerProblem");
class EulerProblem14 extends EulerProblem_1.AbstractEulerProblem {
    constructor() {
        super(...arguments);
        this.problemNumber = 14;
        this.question = `
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.`;
        this.answer = () => {
            /**
             * dictionary of already caclulated numbers and corresponding sequence length
             */
            const memory = {
                13: 10
            };
            /**
             * Calculates the sequence length for any given number
             */
            const calculateSequenceLength = (start = 1) => {
                if (start <= 1) {
                    return 1;
                }
                else if (memory[start]) {
                    return memory[start];
                }
                else {
                    memory[start] = 1 + calculateSequenceLength(next(start));
                    return memory[start];
                }
            };
            /**
             * calculate the next number in the sequence
             */
            const next = (current) => {
                const even = (evenNumber) => evenNumber / 2;
                const odd = (oddNumber) => 3 * oddNumber + 1;
                return current % 2 === 0 ? even(current) : odd(current);
            };
            // BEGIN ANSWER!
            // iterate up to 999,999; afterwords, sort by meory values and get corresponding key for largest value
            const sequenceLengths = Array(1000000)
                .fill(0)
                .map((value, index) => calculateSequenceLength(index));
            const sortedSequence = sequenceLengths.map(v => v).sort((a, b) => b - a);
            const answer = sequenceLengths.indexOf(sortedSequence[0]);
            return answer.toString();
        };
    }
}
exports.default = EulerProblem14;
