import Problem from "./components/Problem";
import { getProblems } from "./lib";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
const problems = getProblems();
ReactDOM.render(React.createElement(MuiThemeProvider, null, 
    React.createElement("div", {className: "ProjectEuler", style: {
        margin: "0 auto",
        maxWidth: "750px",
    }}, problems.map((problem) => React.createElement(Problem, {key: problem.problemNumber, question: problem})))
), document.querySelector("#app"));
