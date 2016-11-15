import { AbstractEulerProblem } from "./EulerProblem";

export default class EulerProblem14 extends AbstractEulerProblem {

    public problemNumber = 14;
    public question = `
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.`;

    public answer = () => {
        /**
         * dictionary of already caclulated numbers and corresponding sequence length
         */
        const memory: { [n: number]: number; } = {
            13: 10,
        };

        /**
         * Calculates the sequence length for any given number
         */
        const calculateSequenceLength = (start: number = 1): number => {
            if (start <= 1) {
                return 1;
            } else if (memory[start]) {
                return memory[start];
            } else {
                memory[start] = 1 + calculateSequenceLength(next(start));
                return memory[start];
            }
        };

        /**
         * calculate the next number in the sequence
         */
        const next = (current: number): number => {
            const even = (evenNumber: number): number => evenNumber / 2;
            const odd = (oddNumber: number): number => (3 * oddNumber) + 1;

            return (current % 2 === 0) ? even(current) : odd(current);
        };

        // BEGIN ANSWER!

        // iterate up to 999,999; afterwords, sort by meory values and get corresponding key for largest value
        const sequenceLengths: number[] = Array(1000000)
            .fill(0)
            .map((value, index) => calculateSequenceLength(index));

        const sortedSequence = sequenceLengths.map((v) => v).sort((a, b) => b - a);
        const answer = sequenceLengths.indexOf(sortedSequence[0]);

        return answer.toString();
    }
}
