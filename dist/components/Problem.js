"use strict";
const Card_1 = require("material-ui/Card");
const Dialog_1 = require("material-ui/Dialog");
const FlatButton_1 = require("material-ui/FlatButton");
const LinearProgress_1 = require("material-ui/LinearProgress");
const React = require("react");
class Problem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: "",
            answerSource: props.question.answer.toString(),
            isComputing: false,
            log: "",
            source: "",
            sourceWindowOpen: false,
            worker: null,
        };
    }
    handleAnswer(event) {
        if (this.state.worker !== null) {
            this.state.worker.terminate();
        }
        this.setState(Object.assign({}, this.state, {
            isComputing: true,
        }), () => {
            const response = `self.onmessage=function(){postMessage(eval((${this.props.question.answer})()))}`;
            const runnable = new Blob([response], { type: "text/javascript" });
            const worker = new Worker(window.URL.createObjectURL(runnable));
            worker.onmessage = (e) => {
                console.log("Received: " + e.data);
                this.setState(Object.assign({}, this.state, {
                    answer: e.data,
                    isComputing: false,
                    worker,
                }));
            };
            worker.postMessage("WORK!!!");
        });
    }
    getSource() {
        const url = `/src/lib/EulerProblem${this.props.question.problemNumber}.ts`;
        return fetch(url).then((response) => {
            return response.text();
        });
    }
    handleSource(event) {
        this.getSource().then((codeString) => {
            this.setState(Object.assign({}, this.state, {
                source: codeString,
            }));
        });
    }
    handleOpenSourceWindow(event) {
        this.setState(Object.assign({}, this.state, {
            sourceWindowOpen: true,
        }), () => {
            this.handleSource(event);
        });
    }
    handleCloseSourceWindow() {
        this.setState(Object.assign({}, this.state, {
            sourceWindowOpen: false,
        }));
    }
    render() {
        const title = `Problem ${this.props.question.problemNumber}`;
        const subtitle = `https://projecteuler.net/problem=${this.props.question.problemNumber}`;
        const actions = [
            React.createElement(FlatButton_1.default, {label: "Cancel", primary: true, onTouchTap: (event) => this.handleCloseSourceWindow()}),
        ];
        return (React.createElement("div", {className: "Problem"}, 
            React.createElement("pre", null), 
            React.createElement(Card_1.Card, null, 
                React.createElement(Card_1.CardHeader, {title: title, subtitle: subtitle, actAsExpander: false, showExpandableButton: false}), 
                React.createElement(Card_1.CardText, {expandable: false}, 
                    React.createElement("pre", {className: "problem-text", style: { whiteSpace: "pre-wrap" }}, this.props.question.question.replace(/\t/g, "").replace(/^\n/g, "")), 
                    (this.state.isComputing && this.state.answer === "") ?
                        React.createElement(LinearProgress_1.default, {mode: "indeterminate"}) :
                        this.state.answer), 
                React.createElement(Card_1.CardActions, null, 
                    React.createElement(FlatButton_1.default, {label: "Source Code", onClick: (event) => this.handleOpenSourceWindow(event)}), 
                    React.createElement(FlatButton_1.default, {label: "Answer", onClick: (event) => this.handleAnswer(event)}))), 
            React.createElement(Dialog_1.default, {title: this.props.question.constructor.name, actions: actions, modal: false, open: this.state.sourceWindowOpen, onRequestClose: (event) => this.handleCloseSourceWindow(), autoScrollBodyContent: true}, this.state.source === "" && this.state.sourceWindowOpen ?
                React.createElement(LinearProgress_1.default, {mode: "indeterminate", style: { margin: "1em 0 0 0" }}) :
                React.createElement("pre", {style: { whiteSpace: "pre-wrap" }}, 
                    React.createElement("code", null, this.state.source)
                ))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Problem;
