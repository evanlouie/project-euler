import { AbstractEulerProblem } from "./EulerProblem";

export default class EulerProblem7 extends AbstractEulerProblem {
  public problemNumber = 7;
  public question = `
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?`;

  public answer = () => {
    /**
     * Find primeness of a number
     * @link https://en.wikipedia.org/wiki/Prime_number#Trial_division
     */
    const isPrime = (n: number): boolean => {
      let start = 2;
      while (start <= Math.sqrt(n)) {
        if (n % start++ < 1) {
          return false;
        }
      }

      return n > 1;
    };

    let nthPrimeNumber = 0;
    let currentNumber = 0;
    while (nthPrimeNumber !== 10001) {
      currentNumber++;
      if (isPrime(currentNumber)) {
        nthPrimeNumber++;
      }
    }

    return currentNumber.toString();
  };
}
