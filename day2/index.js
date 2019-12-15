const dataSet = require('./data.json')

const ex = (x, y) => {
  const data = dataSet.slice()
  data[1] = x
  data[2] = y

  let i = 0
  for (;;) {
    if (data[i] === 1) {
      const [a, b, c] = data.slice(i + 1, i + 4)
      data[c] = data[a] + data[b]
    } else if (data[i] === 2) {
      const [a, b, c] = data.slice(i + 1, i + 4)
      data[c] = data[a] * data[b]
    } else if (data[i] === 99) {
      return data[0]
    }
    i += 4
  }
}

for (let x = 0; x <= 99; x++) {
  for (let y = 0; y <= 99; y++) {
    if (ex(x, y) === 19690720) {
      console.log(x, y)
    }
  }
}
