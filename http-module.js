const http = require('http');

//The http.createServer() method turns your computer into an HTTP server.
const server = http.createServer(
    (req, res) => {
        if (req.url === '/') {

            //write a response to the client
            res.write('Hello World!');
            //end the response
            res.end('Welcome to our home page')
        } else if (req.url === '/about') {
            res.end('Here is our short history')
        } else {
            res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
            `)
        }
    }
)

//the server object listens on port 3000
server.listen(3000)