import Problem from "./components/Problem";
import { getProblems } from "./lib";
import { IEulerProblem } from "./lib/EulerProblem";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();
const problems: IEulerProblem[] = getProblems();

ReactDOM.render(
    <MuiThemeProvider>
        <div
            className="ProjectEuler"
            style={{
                margin: "0 auto",
                maxWidth: "750px",
            }}
            >
            {
                problems.map((problem: IEulerProblem) => <Problem key={problem.problemNumber} question={problem} />)
            }
        </div>
    </MuiThemeProvider>,
    document.querySelector("#app")
);
