export class AbstractEulerProblem {
    constructor() {
        this.problemNumber = 0;
        this.question = "";
        this.time = "-1";
        this.timeLabel = `Project Euler Problem ${this.problemNumber}`;
        this.answer = () => {
            return "Unanswered";
        };
    }
    printExecutionTime() {
        console.time(this.timeLabel);
        console.info(`Question ${this.problemNumber}: ${this.question}`);
        console.log(`---------`);
        console.info(`Answer to problem ${this.problemNumber}: ${this.answer()}`);
        console.timeEnd(this.timeLabel);
    }
    benchmark() {
        const start = performance.now();
        const answer = this.answer();
        const now = performance.now();
        console.info(`Problem ${this.problemNumber} took ${now - start}ms`);
        return answer;
    }
}
