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
