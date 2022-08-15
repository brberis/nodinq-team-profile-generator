const inquirer = require('inquirer');
const { writeFile } = require('../utils/generate-html.js');
const generateTeamPage = require('../src/html-template');

const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
// const Employee = require('./Employee');

class Team {
  constructor() {
    this.role = 'Manager'
    this.name;
    this.id;
    this.email;
    this.employee;
    this.employees = [];
    this.html;
  }

  initializeApp() {
    this.employeeQuestions();
  }

  employeeQuestions() {
    inquirer
    .prompt([
      {
      type: 'text',
      name: 'name',
      message: `Enter ${this.currentRole}'s name:`,
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
      type: 'text',
      name: 'id',
      message: 'Enter employee ID:',
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
      type: 'text',
      name: 'email',
      message: `Enter ${this.currentRole}'s email:`,
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter the email!');
          return false;
        }
      }
    }
  ])      
    .then(({name, id, email}) => {
      this.name = name;
      this.id = id;
      this.email = email;
      // this.employee = new Employee(name, id, email);
      switch (this.role) {
        case 'Manager':
          this.managerQuestions()
          break;
        case 'Engineer':
          this.engineerQuestions()
          break;
        case 'Intern':
          this.internQuestions()
          break;
      }
    });

  }

  managerQuestions() {
    inquirer
    .prompt({
      type: 'text',
      name: 'officeNumber',
      message: 'Enter the office number:',
      validate: numberInput => {
        if (numberInput) {
          return true;
        } else {
          console.log('Please enter the office number!');
          return false;
        }
      }
    })
    .then(({officeNumber}) => {
      this.employee = new Manager(this.name, this.id, this.email, officeNumber);
      this.addMember();
    });
  }

  engineerQuestions() {
    inquirer
    .prompt({
      type: 'text',
      name: 'github',
      message: 'Enter the GitHub username:',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter the username!');
          return false;
        }
      }
    })
    .then(({github}) => {
      this.employee = new Engineer(this.name, this.id, this.email, github);
      this.addMember();
    })
  }

  internQuestions() {
    inquirer
    .prompt({
      type: 'text',
      name: 'school',
      message: 'Enter the school name:',
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log('Please enter the school!');
          return false;
        }
      }
    })
    .then(({school}) => {
      this.employee = new Intern(this.name, this.id, this.email, school);
      this.addMember();
    })   
  }

  addMember() {
    this.employees.push(this.employee);
    console.log(`
    Team member added!
    `);
    this.addNew()
  }

  addNew() {
    inquirer
    .prompt([
    {
      type: 'list',
      name: 'menuSelection',
      message: 'Please select an option:',
      choices: ['Add engineer', 'Add Intern', 'Finish building my team' ],
      default: 'Engineer',
    }])
    .then(({menuSelection}) => {
      switch (menuSelection) {
        case 'Add engineer':
          this.role = 'Engineer';
          this.employeeQuestions();
          break;
        case 'Add Intern':
          this.role = 'Intern';
          this.employeeQuestions();
          break;
        default:
          this.html = generateTeamPage(this.employees);
          this.createFile();
      }
    })
  }

  createFile() {
    writeFile(this.html);
  }

}

module.exports = Team;