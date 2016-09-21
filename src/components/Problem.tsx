import * as React from "react";
import {Card, CardActions, CardHeader, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import LinearProgress from "material-ui/LinearProgress";
import Dialog from "material-ui/Dialog";

import {AbstractEulerProblem} from "../lib/EulerProblem";

export interface ProblemProps {
    question: AbstractEulerProblem;
}

export interface ProblemState {
    answer: string;
    isComputing: boolean;
    log: string;
    source: string;
    sourceWindowOpen: boolean;
}

export default class Problem extends React.Component<ProblemProps, ProblemState> {

    constructor(props: ProblemProps) {
        super(props);
        this.state = {
            answer: "",
            isComputing: false,
            log: "",
            source: "",
            sourceWindowOpen: false,
        };
    }

    handleAnswer(event: React.MouseEvent) {
        this.setState(Object.assign({}, this.state, {
            isComputing: true
        }), () => {
            this.setState(Object.assign({}, this.state, {
                answer: this.props.question.benchmark(),
                isComputing: false
            }));
        });
    }

    getSource(): Promise<String> {
        const url = `/src/lib/EulerProblem${this.props.question.problemNumber}.ts`;
        return fetch(url).then((response) => {
            return response.text();
        });
    }

    handleSource(event: React.MouseEvent) {
        this.getSource().then((codeString) => {
            this.setState(Object.assign({}, this.state, {
                source: codeString
            }));
        });
    }

    handleOpenSourceWindow(event: React.MouseEvent) {
        this.setState(Object.assign({}, this.state, {
            sourceWindowOpen: true
        }), () => {
            this.handleSource(event);
        });
    }

    handleCloseSourceWindow() {
        this.setState(Object.assign({}, this.state, {
            sourceWindowOpen: false
        }));
    }

    render() {
        const title = `Problem ${this.props.question.problemNumber}`;
        const subtitle = `https://projecteuler.net/problem=${this.props.question.problemNumber}`;

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={(event) => this.handleCloseSourceWindow() }
                />
        ];
        return (
            <div className="Problem">
                <pre>
                    {
                        JSON.stringify(this.state, null, 2)
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
                            {this.props.question.question.replace(/\t/g, "") }
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
                            onClick={(event) => this.handleOpenSourceWindow(event) } />
                        <FlatButton
                            label="Answer"
                            onClick={(event) => this.handleAnswer(event) } />
                    </CardActions>
                </Card>
                <Dialog
                    title="Scrollable Dialog"
                    actions={actions}
                    modal={false}
                    open={this.state.sourceWindowOpen}
                    onRequestClose={(event) => this.handleCloseSourceWindow() }
                    autoScrollBodyContent={true}
                    >
                    {
                        this.state.source === "" && this.state.sourceWindowOpen ?
                            <LinearProgress mode="indeterminate" style={{ margin: "1em 0 0 0" }} /> :
                            <pre style={{ whiteSpace: "pre-wrap" }}>
                                {this.state.source}
                            </pre>
                    }
                </Dialog>
            </div>
        );
    }
}
