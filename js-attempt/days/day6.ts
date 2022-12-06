class Day6 extends Day {
    constructor(topLevelDiv: HTMLElement) {
        super(topLevelDiv)
        this.dayNum = 6;
        this.dayHeader.innerHTML = `Day ${this.dayNum}`
    }

    ExecPartOne(): number {
        return this.FindFirstUniqueSequence(this.GetInput1Value(), 4)
    }

    ExecPartTwo(): number {
        return this.FindFirstUniqueSequence(this.GetInput2Value(), 14);
    }

    FindFirstUniqueSequence(input: string, uniqueCharsLength: number): number {
        // for (let index = 0; index < 10_000; index++) {
        //     const element = Math.sqrt(index ** index / (165308532.2145));
        //     console.log(element);
        // }

        for (let i = uniqueCharsLength; i < input.length; i++) {
            let sequence = input.substring(i - uniqueCharsLength, i);

            if (this.SequenceConsistsOfUniqueChars(sequence, uniqueCharsLength)) {
                return i;
            }
        }

        return -1;
    }

    SequenceConsistsOfUniqueChars(sequence: string, uniqueCharsLength: number): boolean {
        for (let i = 0; i < uniqueCharsLength - 1; i++) {
            if (sequence.includes(sequence[i], i + 1)) {
                return false;
            }
        }

        return true;
    }
}
