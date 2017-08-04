import { AbstractEulerProblem } from "./EulerProblem";

export default class EulerProblem1 extends AbstractEulerProblem {
  public problemNumber = 1;
  public question = `
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.`;

  public answer = () =>
    [...Array(999).keys()]
      .map(i => i + 1)
      .reduce((sum, val) => {
        return (sum += val % 3 === 0 || val % 5 === 0 ? val : 0);
      }, 0)
      .toString(10);
}
