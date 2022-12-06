class Day6 extends Day {
    dayNum = 6;

    ExecPartOne () : void {
        const input = this.inputElementPart1.value;

        let index = 4;
        while (index < input.length) {
            let sequence = input.substring(index - 4, index);
            
            if (this.SequenceIsSoP(sequence)) {
                break;
            }

            index ++;
        }

        this.outputDivPart1.innerHTML = `Result Day ${this.dayNum} Part 1: ` + index;
    }

    ExecPartTwo () : void {
        
    }

    SequenceIsSoP(sequence: string): boolean {
        let sequenceIsSop = true;
        
        for (let i = 0; i < 3; i++) {
            let searchChar = sequence.charAt(i);
            if (sequence.indexOf(searchChar, i + 1) > 0) {
                sequenceIsSop = false;
            }
        }

        return sequenceIsSop;
    }
}
