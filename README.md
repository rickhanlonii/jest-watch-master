# Jest Watch Master Plugin

**WIP: Requires Jest changes**
Jest watch plugin for checking changes since master

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
    // ...
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
