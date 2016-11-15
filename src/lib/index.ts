import { IEulerProblem } from "./EulerProblem";
import EulerProblem1 from "./EulerProblem1";
import EulerProblem10 from "./EulerProblem10";
import EulerProblem11 from "./EulerProblem11";
import EulerProblem12 from "./EulerProblem12";
import EulerProblem13 from "./EulerProblem13";
import EulerProblem14 from "./EulerProblem14";
import EulerProblem2 from "./EulerProblem2";
import EulerProblem3 from "./EulerProblem3";
import EulerProblem4 from "./EulerProblem4";
import EulerProblem5 from "./EulerProblem5";
import EulerProblem6 from "./EulerProblem6";
import EulerProblem7 from "./EulerProblem7";
import EulerProblem8 from "./EulerProblem8";
import EulerProblem9 from "./EulerProblem9";

export function getProblems(): IEulerProblem[] {
    return [
        new EulerProblem1(),
        new EulerProblem2(),
        new EulerProblem3(),
        new EulerProblem4(),
        new EulerProblem5(),
        new EulerProblem6(),
        new EulerProblem7(),
        new EulerProblem8(),
        new EulerProblem9(),
        new EulerProblem10(),
        new EulerProblem11(),
        new EulerProblem12(),
        new EulerProblem13(),
        new EulerProblem14(),
    ];
}
