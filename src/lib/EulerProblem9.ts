import { AbstractEulerProblem } from "./EulerProblem";

export interface ICombination {
    a: number;
    b: number;
    c: number;
}

export default class EulerProblem9 extends AbstractEulerProblem {

    public problemNumber = 9;
    public question = `
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.`;

    public answer = () => {
        const isPythagTriple = (a: number, b: number, c: number): Boolean => {
            return (a < b && b < c) && (a * a + b * b === c * c);
        }
        const isValidA = (a: number, b: number, c: number): Boolean => {
            return (a < b && a < c);
        }
        const isValidB = (a: number, b: number, c: number): Boolean => {
            return (a > b && b < c);
        }
        const isValidC = (a: number, b: number, c: number): Boolean => {
            return (c > a && c > b);
        }
        const generateCombinations = (maxC: number): ICombination[] => {
            const range = (start: number, end: number): number[] => {
                return Array(end - start + 1).fill(0).map((_: number, index: number) => start + index);
            }
            const combinations: ICombination[] = range(0, maxC).map((c, index, array) => {
            });
            return combinations;
        }

        return "WIP";
    }
}
