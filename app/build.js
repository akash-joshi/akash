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

const data = {
  name: chalk.bold.white('                      Akash Joshi'),
  work: chalk.white('Full Stack & Open Source Developer'),
  opensource: chalk.bold.white(
    'Working with thedevs & other awesome communities'
  ),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('akashtrikon'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('akash-joshi'),
  github: chalk.gray('https://github.com/') + chalk.green('akash-joshi'),
  web: chalk.cyan('https://akashj.pw'),
  npx: chalk.red('npx') + ' ' + chalk.white('joshi'),
  labelWork: chalk.white.bold('    Current:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
};

const newline = '\n';
const heading = `${data.name}`;
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
