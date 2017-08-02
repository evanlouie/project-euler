import { AppBar } from "material-ui";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import Problem from "./components/Problem";
import { getProblems } from "./lib";
import { IEulerProblem } from "./lib/EulerProblem";

injectTapEventPlugin();
const problems: IEulerProblem[] = getProblems();

const body = document.querySelector("body");
if (body) {
  body.style.margin = "0px";
}

ReactDOM.render(
  <MuiThemeProvider>
    <div className="ProjectEuler" style={{ width: "100%" }}>
      <AppBar title="Project Euler Solutions" showMenuIconButton={false} />
      <div
        className="problems"
        style={{
          margin: "0 auto",
          maxWidth: "750px"
        }}
      >
        {problems.map((problem: IEulerProblem) =>
          <Problem key={problem.problemNumber} question={problem} />
        )}
      </div>
    </div>
  </MuiThemeProvider>,
  document.querySelector("#app")
);
