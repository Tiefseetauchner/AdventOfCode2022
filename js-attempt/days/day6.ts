class Day6 extends Day {
    dayNum = 6;

    ExecPartOne(): void {
        this.currentPart = 1;
        let index = this.FindFirstUniqueSequence(this.inputElementPart1.value, 4)

        this.WriteOutput(index);
    }

    ExecPartTwo(): void {
        this.currentPart = 2;
        let index = this.FindFirstUniqueSequence(this.inputElementPart1.value, 14)

        this.WriteOutput(index);
    }

    FindFirstUniqueSequence(input: string, uniqueCharsLength: number): number {
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
