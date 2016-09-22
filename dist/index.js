"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const injectTapEventPlugin = require("react-tap-event-plugin");
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
const Problem_1 = require("./components/Problem");
const lib_1 = require("./lib");
injectTapEventPlugin();
const problems = lib_1.getProblems();
ReactDOM.render(React.createElement(MuiThemeProvider_1.default, null, 
    React.createElement("div", {className: "ProjectEuler", style: {
        maxWidth: "1000px",
        margin: "0 auto"
    }}, problems.map((problem) => {
        return React.createElement(Problem_1.default, {key: problem.problemNumber, question: problem});
    }))
), document.querySelector("#app"));
