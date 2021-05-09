//we use the 'require' keyword to acces the data we have made accessible in other file by using 'module.exports'
//require takes the paths of the file we want to share
const names = require('./names')
const sayHi = require('./functions')

// console.log(names);

sayHi('amina')
sayHi(names.cheikh)
sayHi(names.ndeye)