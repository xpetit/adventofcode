const data = require('./data.json')

const day1_1 = data.reduce((acc, val) => acc + Math.floor(val / 3) - 2, 0)
console.log({ day1_1 })

const day1_2 = data.reduce((acc, val) => {
  let total = 0
  let fuel = val
  for (;;) {
    const i = Math.floor(fuel / 3) - 2
    if (i <= 0) break
    fuel = i
    total += i
  }
  return acc + total
}, 0)
console.log({ day1_2 })
