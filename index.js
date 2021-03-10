const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const inquirer = require('inquirer');
const fs = require('fs')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your manager?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id of your manager?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number for the manager?',
        },
    ])
    .then(data => {
        const teamManager = new Manager(data.name,data.id,data.email,data.officenumber)
    })
    .then(()=> {
        inquirer.prompt([
            {
                type: 'list',
                name: 'membertype',
                message: 'Which type of team member would you like to add?',
                choices: ['engineer','intern','I am finished adding members']
            },
        ])
    })





function init() {
//Welcome message
    console.log("Welcome to the Team Profile generator, lets build a team!")
// prompt user for manager information
// prompt user for name of next employee
// prompt user for 
    
}
