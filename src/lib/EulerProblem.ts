export interface IEulerProblem {
    problemNumber: number;
    question: string;
    answer(): string;
    timeLabel: string;
    benchmark(): string;
    time: string;
    printExecutionTime(): void;
}

export abstract class AbstractEulerProblem implements IEulerProblem {
    public problemNumber: number = 0;
    public question: string = "";
    public time: string = "-1";
    public abstract answer(): string;

    public timeLabel: string = `Project Euler Problem ${this.problemNumber}`;

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
