<div align="center">
  <a href="https://facebook.github.io/jest/">
    <img width="150" height="150" vspace="" hspace="25" src="http://dp.hanlon.io/16694b99c896/jest.png">
  </a>
  <h1>jest-watch-master</h1>
  <p>Jest watch plugin for checking changes since master</p>
  <p><strong>Requires Jest >= 23.6.0</strong></p>
  <hr />
  <img src="http://dp.hanlon.io/fadbfc9115f0/Image%2525202018-09-10%252520at%25252011.06.40%252520AM.png">
</div>

### Install

Install `jest` and `jest-watch-master`

```bash
yarn add --dev jest jest-watch-master

# or with NPM

npm install --save-dev jest jest-watch-master
```

### Add it to your Jest config

In your `package.json`:

```json
{
  "jest": {
    "watchPlugins": ["jest-watch-master"]
  }
}
```

Or in `jest.config.js`

```js
module.exports = {
  // ...
  watchPlugins: ['jest-watch-master'],
}
```
