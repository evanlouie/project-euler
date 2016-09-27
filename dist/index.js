"use strict";
const Problem_1 = require("./components/Problem");
const lib_1 = require("./lib");
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
const React = require("react");
const ReactDOM = require("react-dom");
const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
const problems = lib_1.getProblems();
ReactDOM.render(React.createElement(MuiThemeProvider_1.default, null, 
    React.createElement("div", {className: "ProjectEuler", style: {
        margin: "0 auto",
        maxWidth: "750px",
    }}, problems.map((problem) => React.createElement(Problem_1.default, {key: problem.problemNumber, question: problem})))
), document.querySelector("#app"));
