//different way of accessing a method from a module but it's the same thing as the other way 
const { readFileSync, writeFileSync } = require('fs')

//readFileSync - Returns the contents of the path
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second);

//writeFileSync - creates a new file 
writeFileSync(
    './content/file-created.txt',
    `here is the result : ${first}, ${second}`)