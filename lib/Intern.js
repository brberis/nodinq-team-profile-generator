const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = 'Intern';
  }

  getGithub(){
    return this.github; 
  }

  getId(){
    return this.id; 
  }

  getSchool(){
    return this.school; 
  }

  getRole(){
    return this.role; 
  }
}

module.exports = Intern;
