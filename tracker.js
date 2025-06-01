// src/tracker.js
const fs = require('fs');
const chalk = require('chalk');
const wallets = JSON.parse(fs.readFileSync('./data/wallet-list.json', 'utf8'));
