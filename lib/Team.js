const inquirer = require('inquirer');
const { writeFile } = require('../utils/generate-html.js');
const generateTeamPage = require('../src/html-template');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

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
    console.log(`
    ======================================
     NODINQ TEAM PROFILE GENERATOR v1.0.0
    ======================================
     `);
    this.employeeQuestions();
  }

  // common employee question
  employeeQuestions() {
    inquirer
    .prompt([
      {
      type: 'text',
      name: 'name',
      message: `Enter ${this.role}'s name:`,
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
      message: `Enter ${this.role}'s email:`,
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
      // follow the rest questions
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

  // prompts for manager employee
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

  // prompts for engineer employee
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

  // prompts for intern employee
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

  // push user data to employees array
  addMember() {
    this.employees.push(this.employee);
    // inherited methods won't add to the array on push
    switch (this.role) {
      case 'Manager':
        this.employees.getOfficeNumber = this.employee.getOfficeNumber();
        break;
      case 'Engineer':
        this.employees.getGithub = this.employee.getGithub();
        break;
      case 'Intern':
        this.employees.getSchool = this.employee.getSchool();
        break;
    }
    
    console.log(`
    Team member added!
    `);
    this.addNew()
  }

  // option menu add or finish
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
          // create html format
          this.html = generateTeamPage(this.employees);
          this.createFile();
      }
    })
  }

  // write the file and copy it to dist directory
  createFile() {
    writeFile(this.html)
    .then(result => {
      console.log(result.message);
    })
    .catch(err => {
      console.log(err);
    });
  }

}

module.exports = Team;