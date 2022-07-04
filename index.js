const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const path = require('path');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Inter = require('./lib/Inter');
const generatePage = require('./src/template');

const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');
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
          const manager = new Manager(answers.name, answers.Id, answers.email, answers.number);
          teamArr.push(manager);
          idArr.push(answers.Id);
          addTeam();
        });
      }

    // addTeam function after created manager
    function addTeam() {
        inquirer.prompt([
          {
            type: 'list',
            name: 'teamChoice',
            message: 'What would you like to add?',
            choices: ['Engineer', 'Intern', 'End profile']
          }
       ]).then(userChoice => {
         switch (userChoice.teamChoice) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addInter();
                break;
            default:
                generateHTML();
         }
       });
    }

 // create a engineer choice
 function addEngineer () {
    inquirer.prompt([
        {
         type: 'input',
         name: 'name',
         message: "What is the engineer's name? (Required)",
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
         message: "What is the engineer's Id? (Required)",
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
         message: "What is the engineer's email? (Required)",
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
         name: 'github',
         message: "What is the engineer's GitHub username? (Required)",
         validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter the GitHub username!');
              return false;
            }
          }
        }
     ]).then(answers => {
         const engineer = new Engineer(answers.name, answers.Id, answers.email, answers.github);
         teamArr.push(engineer);
         idArr.push(answers.engineerId);
         addTeam();
     });
  }

// create a intern choice
function addInter () {
    inquirer.prompt([
        {
         type: 'input',
         name: 'name',
         message: "What is the intern's name? (Required)",
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
         message: "What is the intern's Id? (Required)",
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
         message: "What is the intern's email? (Required)",
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
         name: 'school',
         message: "What is the intern's school name? (Required)",
         validate: schoolInput => {
            if (schoolInput) {
              return true;
            } else {
              console.log('Please enter the school name!');
              return false;
            }
          }
        }
     ]).then(answers => {
         const inter = new Inter(answers.name, answers.Id, answers.email, answers.school);
         teamArr.push(inter);
         idArr.push(answers.interId);
         addTeam();
     });
  }

 // create a function to write index file
  function generateHTML() {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR)
    }
    console.log("Congrats, Your Team Profile is Successfully!!!");
    fs.writeFileSync(outputPath, generatePage(teamArr));

    }

      createManager ();
}

init();

















