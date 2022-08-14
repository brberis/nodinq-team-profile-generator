const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Employee = require('./Employee');

class Team {
  constructor() {
    this.employees = [];
    this.employee;
    this.manager;
    this.engineer;
    this.intern;
  }

  initializeApp() {
    this.employeeData('Manager');
  }

  employeeData(role) {
    inquirer
    .prompt([
      {
      type: 'text',
      name: 'name',
      message: `Enter ${role}'s name:`,
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
      message: `Enter ${role}'s email:`,
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
      // this.employee = new Employee(name, id, email);
      switch (role) {
        case 'Manager':
          this.managerData(name, id, email)
          break;
        case 'Engineer':
          this.engineerData(name, id, email)
          break;
        case 'Intern':
          this.internData(name, id, email)
          break;
      }
    });

  }

  managerData(name, id, email) {
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
      this.manager = new Manager(name, id, email, officeNumber);
      this.addMember(this.manager);
    });
  }

  engineerData(name, id, email) {
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
      this.engineer = new Engineer(name, id, email, github);
      this.addMember(this.engineer);
    })
  }

  internData(name, id, email) {
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
      this.intern = new Intern(name, id, email, school);
      this.addMember(this.intern);
    })   
  }

  addMember(employee) {
    this.employees.push(employee);
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
          this.employeeData('Engineer')
          break;
        case 'Add Intern':
          this.employeeData('Intern')
          break;
        default:
          console.log(this.employees);
      }
    })
  }

}

module.exports = Team;