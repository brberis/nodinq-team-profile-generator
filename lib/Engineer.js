const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = 'Engineer';
  }

  getGithub(){
    return this.github; 
  }

  getId(){
    return this.id; 
  }

  getEmail(){
    return this.email; 
  }

  getRole(){
    return this.role; 
  }
}

module.exports = Engineer;
