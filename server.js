import http from 'http';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Hello world!');
});

app.get('/user/:name', (req, res) => {
    let name = req.params.name
    res.type('text/plain');
    res.send('Hi ' + name + '!');
})

app.listen(port, () => {
    console.log("Node app is running at localhost : " + port );
});
