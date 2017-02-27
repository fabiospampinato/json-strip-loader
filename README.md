# JSON Strip Loader

![Issues](https://img.shields.io/github/issues/fabiospampinato/json-strip-loader.svg)
[![NPM version](https://img.shields.io/npm/v/json-strip-loader.svg)](https://www.npmjs.com/package/json-strip-loader)

JSON loader for Webpack, with support for keys stripping, useful in isomorphic builds for storing secrets in JSON files.

The main use case for this loader comes when using a JSON settings file containing some secret keys, that you want to use on the server but don't want to make public on the client.

Let's say your `settings.json` looks like this:

```json
{
  environment: 'production',
  secret: 'password',
  AWS: {
    secret: 'password'
  }
}
```

Now you can use `json-strip-loader` as a drop-in replacement for `json-loader` on your server webpack configuration:

```js
  use: 'json-strip-loader'
```

And you can strip out the secrets on your client webpack configuration:

```js
  use: 'json-strip-loader?key=secret'
```

## Install

```shell
$ npm install --save json-strip-loader
```

## Webpack Configuration

```js
module.exports = {
  module: {
    rules: [{
      test: /\.json$/,
      use: 'json-strip-loader', // Simply load the file
      use: 'json-strip-loader?key=secret', // Remove the keys names `secret` from the files
      use: 'json-strip-loader?keys[]=secret,keys[]=server' // Remove the keys names `secret` and `server` from the files
    }]
  }
}
```

## CLI

```shell
webpack --module-bind 'json=json-strip-loader'
```

## Inline

```js
import file from 'json-strip-loader!file.json';
```

## Related

- [strip-keys](https://github.com/fabiospampinato/strip-keys) - An utility for removing specific keys from an object.

## License

MIT © Fabio Spampinato
