import http from 'http';
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.type('text/plain');
    response.send('Hello world!');
});

app.listen(port);
