const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Inter = require('./lib/Inter');
const generatePage = require('./src/template');
const teamArr = [];
const idArr = [];

// start application
function init() {

    // create a manager when application starts
    function createManager () {
        console.log("Start building a team profile");
        inquirer.prompt([
            {
             type: 'input',
             name: 'name',
             message: "What is the manager's name? (Required)",
             validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter the name!');
                  return false;
                }
              }
            },
            {
             type: 'input',
             name: 'Id',
             message: "What is the manager's ID? (Required)",
             validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log('Please enter the ID!');
                  return false;
                }
              }
            },
            {
             type: 'input',
             name: 'email',
             message: "What is the manager's email? (Required)",
             validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter the email!');
                  return false;
                }
              }
            },
            {
             type: 'input',
             name: 'number',
             message: "What is the manager's office number? (Required)",
             validate: numberInput => {
                if (numberInput) {
                  return true;
                } else {
                  console.log('Please enter the office number!');
                  return false;
                }
              }
            }
        ])
        .then(answers => {

        })








    }

















}