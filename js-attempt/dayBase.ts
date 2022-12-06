abstract class Day {
    topLevelDiv: HTMLElement
    inputElementPart1: HTMLTextAreaElement
    inputElementPart2: HTMLTextAreaElement
    outputDivPart1: HTMLElement
    outputDivPart2: HTMLElement
    abstract dayNum: number

    constructor(topLevelDiv: HTMLElement) {
        this.topLevelDiv = topLevelDiv;

        let dayDiv = document.createElement("div");
        this.inputElementPart1 = document.createElement("textArea") as HTMLTextAreaElement;
        console.log(this.inputElementPart1)
        this.inputElementPart2 = document.createElement("textArea") as HTMLTextAreaElement;
        this.outputDivPart1 = document.createElement("div");
        this.outputDivPart2 = document.createElement("div");

        dayDiv.appendChild(this.inputElementPart1);
        dayDiv.appendChild(this.outputDivPart1);
        dayDiv.appendChild(this.inputElementPart2);
        dayDiv.appendChild(this.outputDivPart2);

        this.topLevelDiv.appendChild(dayDiv);

        console.log(this.inputElementPart1);
        this.inputElementPart1.addEventListener("keypress", () => this.ExecPartOne(), false);
        this.inputElementPart2.addEventListener("keypress", () => this.ExecPartTwo(), false);
    }

    abstract ExecPartOne(): void;
    abstract ExecPartTwo(): void;
}