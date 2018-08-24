const express = require('express');
const { Nuxt, Builder } = require('nuxt');
const app = express();
const ENV_SETTING = require('../env_setting.json');
const CURRENT_ENV = process.env.NODE_ENV;
const host = ENV_SETTING[CURRENT_ENV].HOST;
const port = ENV_SETTING[CURRENT_ENV].PORT;

app.set('port', port);

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

console.log('config', config);

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }
  // Give nuxt middleware to express
  app.use(nuxt.render);
  // Listen the server
  app.listen(port, host);
  console.log('Server listening on http://' + host + ':' + port); // eslint-disable-line no-console
}

start();
