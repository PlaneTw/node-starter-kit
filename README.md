# Node.js Starter Kit

## Automatically Restart
npm install package
```bash
    npm install --save-dev nodemon
```
- [nodemon](http://nodemon.io/)

package.json scripts
```json
{
  "scripts": {
    "start": "node_modules/.bin/nodemon server.js "
  }
}
```

## Use es6 (es2015)
npm install package
```bash
    npm install --save-dev babel-cli babel-preset-es2015
```
- [babel-cli](https://babeljs.io/docs/usage/cli/)
- [babel-preset-es2015](https://babeljs.io/docs/plugins/preset-es2015/)

package.json scripts
```json
{
  "scripts": {
    "start": "nodemon server.js --exec babel-node --presets es2015"
  }
}
```

## Production use no babel-node
babel-node
>
Not meant for production use
You should not be using babel-node in production. It is unnecessarily heavy, with high memory usage due to the cache being stored in memory. You will also always experience a startup performance penalty as the entire app needs to be compiled on the fly.
>
package.json scripts
```json
{
  "scripts": {
    "start": "nodemon server.js --exec babel-node --presets es2015",
    "build": "babel src/server.js -o server.js --presets es2015",
    "serv": "node server.js"
  }
}
```

## Use .babelrc

.babelrc
```json
{
    "presets": ["es2015"],
    "plugins": []
}
```

package.json scripts
```json
{
  "scripts": {
    "start": "nodemon server.js --exec babel-node",
    "build": "babel src/server.js -o server.js",
    "serv": "node server.js"
  }
}
```

## Use express
```bash
    npm install --save-dev express
```
- [express](http://expressjs.com/)
