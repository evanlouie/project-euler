import { Card, CardActions, CardHeader, CardText, Dialog, FlatButton, LinearProgress } from "material-ui";
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
      worker: null
    };
  }

  public handleAnswer() {
    if (typeof Worker !== "undefined") {
      if (this.state.worker !== null) {
        this.state.worker.terminate();
      }
      this.setState(
        Object.assign({}, this.state, {
          isComputing: true
        }),
        () => {
          const response = `self.onmessage=function(){postMessage(eval((${this.props.question.answer})()))}`;
          const runnable = new Blob([response], { type: "text/javascript" });
          const worker = new Worker(window.URL.createObjectURL(runnable));
          worker.onmessage = e => {
            console.log("Received: " + e.data);
            this.setState(
              Object.assign({}, this.state, {
                answer: e.data,
                isComputing: false,
                worker
              })
            );
          };
          worker.postMessage("WORK!!!"); // Start the worker.
        }
      );
    } else {
      console.exception(`${navigator.appVersion} lacks Web Worker support.`);
      console.info(
        "Web Workers are required to evaluated answers as computation will cause the main window thread to lock"
      );
      alert("Your browser doesn't seem to support Web Workers :-(");
    }
  }

  public handleSource() {
    this.setState(
      Object.assign({}, this.state, {
        source: this.props.question.answer.toString()
      })
    );
  }

  public handleOpenSourceWindow() {
    this.setState(
      Object.assign({}, this.state, {
        sourceWindowOpen: true
      }),
      () => {
        this.handleSource();
      }
    );
  }

  public handleCloseSourceWindow() {
    this.setState(
      Object.assign({}, this.state, {
        sourceWindowOpen: false
      })
    );
  }

  public render() {
    const title = `Problem ${this.props.question.problemNumber}`;
    const link = `https://projecteuler.net/problem=${this.props.question.problemNumber}`;
    const subtitle = (
      <a href={link} target="_blank">
        {link}
      </a>
    );

    const actions = [<FlatButton label="Cancel" primary={true} onTouchTap={() => this.handleCloseSourceWindow()} />];

    return (
      <div className="Problem">
        <pre>
          {
            // JSON.stringify(this.state, null, 2)
          }
        </pre>
        <Card>
          <CardHeader title={title} subtitle={subtitle} actAsExpander={false} showExpandableButton={false} />
          <CardText expandable={false}>
            <pre className="problem-text" style={{ whiteSpace: "pre-wrap" }}>
              {this.props.question.question.replace(/\t/g, "").replace(/^\n/g, "")}
            </pre>
            {this.state.isComputing && this.state.answer === "" ? (
              <LinearProgress mode="indeterminate" />
            ) : (
              this.state.answer
            )}
          </CardText>
          <CardActions>
            <FlatButton label="Source Code" onClick={() => this.handleOpenSourceWindow()} />
            <FlatButton label="Answer" onClick={() => this.handleAnswer()} />
          </CardActions>
        </Card>
        <Dialog
          title={`Problem ${this.props.question.problemNumber}`}
          actions={actions}
          modal={false}
          open={this.state.sourceWindowOpen}
          onRequestClose={() => this.handleCloseSourceWindow()}
          autoScrollBodyContent={true}
        >
          {this.state.source === "" && this.state.sourceWindowOpen ? (
            <LinearProgress mode="indeterminate" style={{ margin: "1em 0 0 0" }} />
          ) : (
            <pre style={{ whiteSpace: "pre-wrap" }}>
              <code>({this.state.source})();</code>
            </pre>
          )}
        </Dialog>
      </div>
    );
  }
}
