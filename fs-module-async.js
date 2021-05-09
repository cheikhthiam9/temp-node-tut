const fs = require('fs')

// Asynchronously reads the entire contents of a file.
fs.readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }

    const first = result;

    fs.readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result
        fs.writeFile(
            './content/file-created-async.txt',
            `here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }

                console.log(result);

            }
        )
    })

})