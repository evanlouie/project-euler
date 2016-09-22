import * as React from "react";
import * as ReactDOM from "react-dom";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Problem from "./components/Problem";
import { IEulerProblem } from "./lib/EulerProblem";
import { getProblems } from "./lib";

injectTapEventPlugin();
const problems: IEulerProblem[] = getProblems();

ReactDOM.render(
    <MuiThemeProvider>
        <div
            className="ProjectEuler"
            style={{
                maxWidth: "1000px",
                margin: "0 auto"
            }}
            >
            {
                problems.map((problem: IEulerProblem) => {
                    return <Problem key={problem.problemNumber} question={problem} />;
                })
            }
        </div>
    </MuiThemeProvider>,
    document.querySelector("#app")
);
