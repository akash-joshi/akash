'use strict';
const { writeFileSync } = require('fs');
const path = require('path');

const chalk = require('chalk');
const boxen = require('boxen');

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

const handle = 'pavanjadhaw';

const data = {
  name: chalk.bold.white('               Pavan Jadhaw'),
  handle: chalk.white('@' + handle),
  work: chalk.white('CS Undergrad'),
  opensource: chalk.bold.white(
    'Trying my best to give back to awesome community'
  ),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan(handle),
  npm: chalk.gray('https://npmjs.com/') + chalk.red(handle),
  github: chalk.gray('https://github.com/') + chalk.green(handle),
  web: chalk.cyan('https://pavanjadhaw.me'),
  npx: chalk.red('npx') + ' ' + chalk.white('pavanjadhaw'),
  labelWork: chalk.white.bold('    Current:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
};

const newline = '\n';
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  opensourcing +
  newline +
  newline + // data.labelOpenSource + data.opensource
  twittering +
  newline + // data.labelTwitter + data.twitter
  npming +
  newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  webing +
  newline +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

writeFileSync(
  path.join(__dirname, 'src/output'),
  chalk.green(boxen(output, options))
);
