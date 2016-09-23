export interface IEulerProblem {
    problemNumber: number;
    question: string;
    time: string;
    timeLabel: string;
    // We define our answer as an anonymous function so it is worker/thread safe
    answer: () => string;
    benchmark(): string;
    printExecutionTime(): void;
}

export abstract class AbstractEulerProblem implements IEulerProblem {
    public problemNumber: number = 0;
    public question: string = "";
    public time: string = "-1";
    public timeLabel: string = `Project Euler Problem ${this.problemNumber}`;
    public answer = () => {
        return "Unanswered";
    };
    public printExecutionTime(): void {
        console.time(this.timeLabel);
        console.info(`Question ${this.problemNumber}: ${this.question}`);
        console.log(`---------`);
        console.info(`Answer to problem ${this.problemNumber}: ${this.answer()}`);
        console.timeEnd(this.timeLabel);
    }
    public benchmark(): string {
        const start = performance.now();
        const answer = this.answer();
        const now = performance.now();
        console.info(`Problem ${this.problemNumber} took ${now - start}ms`);
        return answer;
    }
}
