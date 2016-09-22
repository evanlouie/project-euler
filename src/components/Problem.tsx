import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import LinearProgress from "material-ui/LinearProgress";
import * as React from "react";

import { AbstractEulerProblem } from "../lib/EulerProblem";

export interface IProblemProps {
    question: AbstractEulerProblem;
}

export interface IProblemState {
    answer: string;
    answerSource: string;
    isComputing: boolean;
    log: string;
    source: string;
    sourceWindowOpen: boolean;
    worker: Worker | null;
}

export default class Problem extends React.Component<IProblemProps, IProblemState> {

    constructor(props: IProblemProps) {
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

    public handleAnswer(event: React.MouseEvent) {
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
                }));
            };
            worker.postMessage("WORK!!!"); // Start the worker.

        });
    }

    public getSource(): Promise<String> {
        const url = `/src/lib/EulerProblem${this.props.question.problemNumber}.ts`;
        return fetch(url).then((response) => {
            return response.text();
        });
        // return this.props.question.constructor.toString();
    }

    public handleSource(event: React.MouseEvent) {
        this.getSource().then((codeString) => {
            this.setState(Object.assign({}, this.state, {
                source: codeString,
            }));
        });
        // this.setState(Object.assign({}, this.state, {
        //     source: this.props.question.constructor.toString()
        // }));
    }

    public handleOpenSourceWindow(event: React.MouseEvent) {
        this.setState(Object.assign({}, this.state, {
            sourceWindowOpen: true,
        }), () => {
            this.handleSource(event);
        });
    }

    public handleCloseSourceWindow() {
        this.setState(Object.assign({}, this.state, {
            sourceWindowOpen: false,
        }));
    }

    public render() {
        const title = `Problem ${this.props.question.problemNumber}`;
        const subtitle = `https://projecteuler.net/problem=${this.props.question.problemNumber}`;

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={(event) => this.handleCloseSourceWindow()}
                />,
        ];

        return (
            <div className="Problem">
                <pre>
                    {
                        // JSON.stringify(this.state, null, 2)
                    }
                </pre>
                <Card>
                    <CardHeader
                        title={title}
                        subtitle={subtitle}
                        actAsExpander={false}
                        showExpandableButton={false}
                        />
                    <CardText expandable={false}>
                        <pre
                            className="problem-text"
                            style={{ whiteSpace: "pre-wrap" }}
                            >
                            {this.props.question.question.replace(/\t/g, "").replace(/^\n/g, "")}
                        </pre>
                        {
                            (this.state.isComputing && this.state.answer === "") ?
                                <LinearProgress mode="indeterminate" /> :
                                this.state.answer
                        }
                    </CardText>
                    <CardActions>
                        <FlatButton
                            label="Source Code"
                            onClick={(event) => this.handleOpenSourceWindow(event)} />
                        <FlatButton
                            label="Answer"
                            onClick={(event) => this.handleAnswer(event)} />
                    </CardActions>
                </Card>
                <Dialog
                    title="Scrollable Dialog"
                    actions={actions}
                    modal={false}
                    open={this.state.sourceWindowOpen}
                    onRequestClose={(event) => this.handleCloseSourceWindow()}
                    autoScrollBodyContent={true}
                    >
                    {
                        this.state.source === "" && this.state.sourceWindowOpen ?
                            <LinearProgress mode="indeterminate" style={{ margin: "1em 0 0 0" }} /> :
                            <pre style={{ whiteSpace: "pre-wrap" }}>
                                <code>
                                    {this.state.source}
                                </code>
                            </pre>
                    }
                </Dialog>
            </div>
        );
    }
}
