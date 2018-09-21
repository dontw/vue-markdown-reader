const express = require('express');
const { Nuxt, Builder } = require('nuxt');
const app = express();
const chalk = require('chalk');
const log = console.log;

// ENV SETTING
const ENV_SETTING = require('../env_setting');
const CURRENT_VER = require('../package.json').version;
const CURRENT_ENV = process.env.NODE_ENV;
const protocal = ENV_SETTING[CURRENT_ENV].PROTOCAL;
const host = ENV_SETTING[CURRENT_ENV].HOST;
const port = ENV_SETTING[CURRENT_ENV].PORT;

app.set('port', port);

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

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

  //log current version
  log(
    chalk.bgGreen.white.bold(
      ` ★ starlux console frontend ★ ${chalk.bgWhite.black.bold(
        ' ' + CURRENT_VER + ' ',
      )}`,
    ),
  );

  //log current enviroment
  log(
    chalk.greenBright.bold(
      `current environment: ${chalk.white.bold(' ' + CURRENT_ENV + ' ')}`,
    ),
  );

  //log current server url
  log(
    chalk.greenBright.bold(
      `server listening on: ${chalk.white.bold(
        '' + protocal + '://' + host + ':' + port + '',
      )}`,
    ),
  ); // eslint-disable-line no-console
}

start();
