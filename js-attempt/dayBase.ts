abstract class Day {
    topLevelDiv: HTMLElement;
    inputElementPart1: HTMLTextAreaElement;
    inputElementPart2: HTMLTextAreaElement;
    outputDivPart1: HTMLElement;
    outputDivPart2: HTMLElement;
    currentPart: number = 0;
    dayNum: number = 0;
    dayHeader: HTMLHeadingElement;

    GetInput1Value = () => this.inputElementPart1.value;
    GetInput2Value = () => this.inputElementPart1.value;

    constructor(topLevelDiv: HTMLElement) {
        this.topLevelDiv = topLevelDiv;

        let dayDiv = document.createElement("div");

        this.dayHeader = document.createElement("h2");

        let part1Header = document.createElement("h3");
        part1Header.innerText = `Part 1`;
        let part2Header = document.createElement("h3");
        part2Header.innerText = `Part 2`;
        
        this.inputElementPart1 = document.createElement("textArea") as HTMLTextAreaElement;
        this.inputElementPart1.classList.add("form-input");
        this.inputElementPart2 = document.createElement("textArea") as HTMLTextAreaElement;
        this.inputElementPart2.classList.add("form-input");
        this.outputDivPart1 = document.createElement("div");
        this.outputDivPart2 = document.createElement("div");

        dayDiv.appendChild(this.dayHeader);
        dayDiv.appendChild(part1Header);
        dayDiv.appendChild(this.inputElementPart1);
        dayDiv.appendChild(this.outputDivPart1);
        dayDiv.appendChild(part2Header);
        dayDiv.appendChild(this.inputElementPart2);
        dayDiv.appendChild(this.outputDivPart2);

        this.topLevelDiv.appendChild(dayDiv);

        console.log(this.inputElementPart1);
        this.inputElementPart1.addEventListener("change", () => this.WriteOutput(this.ExecPartOne(), this.outputDivPart1), false);
        this.inputElementPart2.addEventListener("change", () => this.WriteOutput(this.ExecPartTwo(), this.outputDivPart2), false);
    }

    WriteOutput(result: any, outputDiv: HTMLElement): void {
        outputDiv.innerHTML = `<p>Result: <kbd>${result}</kbd></p>`;
    }

    abstract ExecPartOne(): any;
    abstract ExecPartTwo(): any;
}