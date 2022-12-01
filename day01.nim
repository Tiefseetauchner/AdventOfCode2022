import nre
import algorithm
import sequtils
import aochelpers

const input = readFile("inputs/day01-01.txt")
var elves = input.split(re"\n\n")

var elveCals = map(elves, addLines)
sort(elveCals, SortOrder.Descending)

echo "Question 1: ", elveCals[0]
echo "Question 2: ", (elveCals[0] + elveCals[1] + elveCals[2])
