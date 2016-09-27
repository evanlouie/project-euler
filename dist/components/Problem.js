import { Card, CardActions, CardHeader, CardText, Dialog, FlatButton, LinearProgress } from "material-ui";
import * as React from "react";
export default class Problem extends React.Component {
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
    handleAnswer() {
        if (typeof Worker !== "undefined") {
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
                worker.postMessage("WORK!!!"); // Start the worker.
            });
        }
        else {
            console.exception(`${navigator.appVersion} lacks Web Worker support.`);
            console.info("Web Workers are required to evaluated answers as computation will cause the main window thread to lock");
            alert("Your browser doesn't seem to support Web Workers :-(");
        }
    }
    handleSource() {
        this.setState(Object.assign({}, this.state, {
            source: this.props.question.constructor.toString(),
        }));
    }
    handleOpenSourceWindow() {
        this.setState(Object.assign({}, this.state, {
            sourceWindowOpen: true,
        }), () => {
            this.handleSource();
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
            React.createElement(FlatButton, {label: "Cancel", primary: true, onTouchTap: () => this.handleCloseSourceWindow()}),
        ];
        return (React.createElement("div", {className: "Problem"}, 
            React.createElement("pre", null), 
            React.createElement(Card, null, 
                React.createElement(CardHeader, {title: title, subtitle: subtitle, actAsExpander: false, showExpandableButton: false}), 
                React.createElement(CardText, {expandable: false}, 
                    React.createElement("pre", {className: "problem-text", style: { whiteSpace: "pre-wrap" }}, this.props.question.question.replace(/\t/g, "").replace(/^\n/g, "")), 
                    (this.state.isComputing && this.state.answer === "") ?
                        React.createElement(LinearProgress, {mode: "indeterminate"}) :
                        this.state.answer), 
                React.createElement(CardActions, null, 
                    React.createElement(FlatButton, {label: "Source Code", onClick: () => this.handleOpenSourceWindow()}), 
                    React.createElement(FlatButton, {label: "Answer", onClick: () => this.handleAnswer()}))), 
            React.createElement(Dialog, {title: this.props.question.constructor.name, actions: actions, modal: false, open: this.state.sourceWindowOpen, onRequestClose: () => this.handleCloseSourceWindow(), autoScrollBodyContent: true}, this.state.source === "" && this.state.sourceWindowOpen ?
                React.createElement(LinearProgress, {mode: "indeterminate", style: { margin: "1em 0 0 0" }}) :
                React.createElement("pre", {style: { whiteSpace: "pre-wrap" }}, 
                    React.createElement("code", null, this.state.source)
                ))));
    }
}
