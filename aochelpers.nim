import strutils
import nre

proc cmpLines*(x, y: string): int =
  cmp(y.count("\n"), x.count("\n"))

proc addLines*(lines: string): int =
  let nums = lines.split(re"\n")

  var sum = 0;

  for num in nums:
    sum += parseInt(num)

  sum
