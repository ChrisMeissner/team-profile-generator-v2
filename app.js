const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateTemplate = require('./src/page-template');

const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");
const Manager = require ("./lib/Manager");

const allTeam = [];
const allIds = [];

const output_dir = path.resolve(__dirname, "output");
const output_path = path.join(output_dir, 'teamprofile.html');

const promptManager = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: "Hello Manager! Please enter your name? (required)",
      validate: managerNameInput => {
        if (managerNameInput) {
          return true;
        } else {
          console.log("You must enter your name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerIdNumber',
      message: "What is your Employee ID Number? (required)",
      validate: managerIdNumberInput => {
        if (managerIdNumberInput) {
          return true;
        } else {
          console.log("You must enter your Employee ID Number.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "What is your email address? (required)",
      validate: managerEmailInput => {
        if (managerEmailInput) {
          return true;
        } else {
          console.log("You must enter your email adress.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: "What is your office number? (required)",
      validate: managerOfficeNumberInput => {
        if (managerOfficeNumberInput) {
          return true;
        } else {
          console.log("You must enter your office number.");
          return false;
        }
      }
    }
  ])
  
  .then(data => {
    const manager = new Manager(data.managerName, data.managerIdNumber, data.managerEmail, data.managerOfficeNumber);
    allTeam.push(manager);
    allIds.push(data.managerIdNumber);
    promptWhatNext();
  })
}

const promptWhatNext = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'employeeAdd',
      message: "What would you like to do next?",
      choices: ['Add Engineer', 'Add Intern', 'Finish Profile'],
      validate: employeeAddInput => {
        if(employeeAddInput) {
          return true;
        } else {
          return false;
        }
      }
    }
  ])
  .then((answers) => {
    console.log(answers)
    if(answers.employeeAdd == 'Add Engineer') {
      promptEngineer();
    } else if(answers.employeeAdd == 'Add Intern') {
      promptIntern();
    } else if(answers.employeeAdd == 'Finish Profile') {
      writePage();
      console.log("Go to 'teamprofile.html' to see your updated team profile.");
    }
  });
}


const promptEngineer = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: "What is the Engineer's name? (required)",
      validate: engineerNameInput => {
        if(engineerNameInput) {
          return true;
        } else {
          console.log("You must enter a name for this Engineer.");
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'engineerIdNumber',
      message: "What is this Engineer's ID number? (required)",
      validate: engineerIdInput => {
        if(engineerIdInput) {
          return true;
        } else {
          console.log("You must enter an ID number for this Engineer.");
        }
      }

    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: "Please enter the Engineer's email address. (required)",
      validate: engineerEmailInput => {
        if (engineerEmailInput) {
          return true;
        } else {
          console.log("You must enter an email for this Engineer.");
        }
      }
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: "Please enter the Engineer's Github username.",
      validate: engineerGithubInput => {
        if(engineerGithubInput) {
          return true;
        } else {
          console.log("You must enter a Github username for this Engineer.");
        }
      }
    }
  ])

  .then(data => {
    const engineer = new Engineer(data.engineerName, data.engineerIdNumber, data.engineerEmail, data.engineerGithub);
    allTeam.push(engineer);
    allIds.push(data.engineerIdNumber);
    promptWhatNext();
  })
};

const promptIntern = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'inName',
      message: "What is the Intern's name? (required)",
      validate: internNameInput => {
        if(internNameInput) {
          return true;
        } else {
          console.log("You must enter a name for this Intern.");
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'inIdNumber',
      message: "What is this Intern's ID number? (required)",
      validate: internIdInput => {
        if(internIdInput) {
          return true;
        } else {
          console.log("You must enter an ID number for this Intern.");
        }
      }

    },
    {
      type: 'input',
      name: 'internEmail',
      message: "Please enter the Interns's email address. (required)",
      validate: internEmailInput => {
        if (internEmailInput) {
          return true;
        } else {
          console.log("You must enter an email for this Intern.");
        }
      }
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "Please enter the Intern's school name.",
      validate: internSchoolInput => {
        if(internSchoolInput) {
          return true;
        } else {
          console.log("You must enter a school name for the Intern.");
        }
      }
    }
  ])

  .then(data => {
    const intern = new Intern(data.internName, data.internIdNumber, data.internEmail, data.internSchoolInput);
    allTeam.push(intern);
    allIds.push(data.internIdNumber);
    promptWhatNext();
  })
};

function writePage() {
  if(!fs.existsSync(output_dir)) {fs.mkdir(output_dir)}
  fs.writeFileSync(output_path, generateTemplate('teamprofile.html'), 'utf8')
}

function init() {
  promptManager();
}

init();