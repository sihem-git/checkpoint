const fs = require('fs')

console.log(fs.readFileSync('./file.js'))
const buffer = fs.readFileSync('./file.js')
const data =  buffer.toString()
console.log(data)
