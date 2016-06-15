import http from 'http';
import express from 'express';
import path from 'path'

const app = express();
const port = process.env.PORT || 3000;
const viewPath = path.join(__dirname, 'views');

app.set('view engine', 'pug');
app.set('views', viewPath);

app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Hello world!');
});

app.get('/hi/:name', (req, res) => {
    let name = req.params.name
    res.type('text/plain');
    res.send('Hi ' + name + '!');
})

app.get('/hello/:name', (req, res) => {
    let name = req.params.name
    res.render("hello", {
        name: name
    });
});

app.listen(port, () => {
    console.log("Node app is running at localhost : " + port );
});
