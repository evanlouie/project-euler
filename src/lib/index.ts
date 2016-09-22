import { IEulerProblem } from "./EulerProblem";
import EulerProblem1 from "./EulerProblem1";
import EulerProblem2 from "./EulerProblem2";
import EulerProblem3 from "./EulerProblem3";
import EulerProblem4 from "./EulerProblem4";
import EulerProblem5 from "./EulerProblem5";
import EulerProblem6 from "./EulerProblem6";

export function getProblems(): IEulerProblem[] {
    return [
        new EulerProblem1(),
        new EulerProblem2(),
        new EulerProblem3(),
        new EulerProblem4(),
        new EulerProblem5(),
        new EulerProblem6(),
    ];
}
