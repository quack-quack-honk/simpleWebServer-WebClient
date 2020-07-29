var http = require('http');

http.createServer((request, response) => {
    const {
        headers,
        method,
        url
    } = request;
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        // At this point, we have the headers, method, url and body

        console.log(body)
        response.end()
    });
}).listen(6969);
console.log("Server running on port 6969");