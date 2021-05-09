const path = require('path')

//Provides the platform-specific path segment separator:
console.log(path.sep);

//The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
const filePath = path.join('/content', 'text.txt')
console.log(filePath)

//The path.basename() method returns the last portion of a path
const base = path.basename(filePath)
console.log(base);

//The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
const absolutePath = path.resolve(__dirname, 'content', 'text.txt')
console.log(absolutePath);