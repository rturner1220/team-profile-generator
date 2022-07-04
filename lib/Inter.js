const Employee = require('./Employee');

class Inter extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    // returns intern
    getRole() {
        return 'Inter';
    }
  }

  module.exports = Inter;