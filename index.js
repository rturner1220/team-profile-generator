const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Inter = require('./lib/Inter');
const generatePage = require('./src/template');
