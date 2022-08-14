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
    .prompt({
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
      message: `Enter employee ID:`,
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
    },
    )      
    .then(({ name, id, email }) => {
      this.employee = new Employee(name, id, email);
      switch (role) {
        case 'Manager':
          this.managerData()
          break;
      }
    });

  }

  managerData() {
    console.log(this.employee)
  }


}