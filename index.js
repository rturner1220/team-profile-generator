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

const team = [];
const id = [];

// start application
const init = () => {

  // create a manager when application starts

  console.log("Create a team profile");
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
    .then(res => {
      const manager = new Manager(res.name, res.Id, res.email, res.number);
      team.push(manager);
      id.push(res.Id);
      addTeam();
    });
}

// addTeam function after created manager
const addTeam = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'teamChoice',
      message: 'What would you like to add?',
      choices: ['Engineer', 'Intern', 'End profile']
    }
  ]).then(res => {
    let teamChoice = res.teamChoice;

    // Call the Team Choice 
    switch (teamChoice.toLowerCase()) {
      case 'engineer':
        inquirer
          .prompt([
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
          ]).then(res => {
            const engineer = new Engineer(res.name, res.Id, res.email, res.github);
            team.push(engineer);
            id.push(res.engineerId);
            addTeam();
          });

        break

      case 'intern':
        inquirer
          .prompt([
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
          ]).then(res => {
            const inter = new Inter(res.name, res.Id, res.email, res.school);
            team.push(inter);
            id.push(res.interId);
            addTeam();
          });

        break;
      default:
        generateHTML();
    }
  })


  // create a function to write index file
  const generateHTML = () => {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR)
    }
    console.log("Congrats, Your Team Profile is Successfully!!!");
    fs.writeFileSync(outputPath, generatePage(team));

  }

}

init();

















