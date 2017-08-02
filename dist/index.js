"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_ui_1 = require("material-ui");
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
const React = require("react");
const ReactDOM = require("react-dom");
const injectTapEventPlugin = require("react-tap-event-plugin");
const Problem_1 = require("./components/Problem");
const lib_1 = require("./lib");
injectTapEventPlugin();
const problems = lib_1.getProblems();
const body = document.querySelector("body");
if (body) {
    body.style.margin = "0px";
}
ReactDOM.render(React.createElement(MuiThemeProvider_1.default, null,
    React.createElement("div", { className: "ProjectEuler", style: { width: "100%" } },
        React.createElement(material_ui_1.AppBar, { title: "Project Euler Solutions", showMenuIconButton: false }),
        React.createElement("div", { className: "problems", style: {
                margin: "0 auto",
                maxWidth: "750px"
            } }, problems.map((problem) => React.createElement(Problem_1.default, { key: problem.problemNumber, question: problem }))))), document.querySelector("#app"));
