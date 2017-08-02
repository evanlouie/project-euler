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
    let product = 0;
    const isTriplet = (a: number, b: number, c: number): boolean => {
      return (
        a < b && b < c && Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)
      );
    };
    // by definition; largest b === c and a < b;
    loop: for (let c = 0; c <= 1000; c++) {
      for (let b = 0; b <= 1000; b++) {
        for (let a = 0; a <= 1000; a++) {
          if (isTriplet(a, b, c) && a + b + c === 1000) {
            product = a * b * c;
            break loop;
          }
        }
      }
    }

    return product.toString();
  };
}
