import http from 'http';

http.createServer(
    (request, response) => {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello world!');
        response.end();
    }
).listen(3000);
