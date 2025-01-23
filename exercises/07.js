const symbols = [
  ['-', '-', '*', '-', '-'],
  ['-', '*', '*', '*', '-'],
  ['*', '*', '*', '*', '*']
]

let message = ''
for (const row of symbols) {
  for (const symbol of row) {
      message += `${symbol}`    
  }
  message += '\n'
}

console.log(message)