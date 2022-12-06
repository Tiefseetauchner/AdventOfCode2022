class Day5 extends Day {
    constructor(topLevelDiv: HTMLElement) {
        super(topLevelDiv)
        this.dayNum = 5;
        this.dayHeader.innerHTML = `Day ${this.dayNum}`
    }

    ExecPartOne(): string {
        return "" + Stack.ParseStacks(this.GetInput1Value()).length;
    }

    ExecPartTwo(): string {
        return "" + Stack.ParseStacks(this.GetInput2Value()).length;
    }
}

class Stack {
    items: StackObject[];
    static rowRegex = /^(\[[A-Z]\] ?| {4})+$/m

    constructor() {
        this.items = Array<StackObject>();
    }

    push(item: StackObject) {
        this.items.push(item);
    }

    pop(): StackObject {
        return this.items.pop()!;
    }

    GetTopElement(): StackObject {
        return this.items[this.items.length - 1]
    }

    static ParseStacks(stackInput: string): Stack[] {
        const stackCount = (stackInput.split("\n")[0].length + 1) / 4;

        let stacks: Stack[] = [...Array(stackCount)].map(() => new Stack());
        console.log(stacks)
        
        let rows = stackInput.split("\n").filter(line => this.rowRegex.test(line));
        
        rows.forEach(row =>
            row.match(/(\[[A-Z]\] ?| {4})/g)?.forEach(
                (col, index) => {
                    if (col[1] != ' ') stacks[index].push(new StackObject(col[1]));
                }
            )
        );

        return stacks;
    }
}

class StackObject {
    id: string;

    constructor(id: string) {
        this.id = id;
    }
}