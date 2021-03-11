const inquirer = require("inquirer");
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const employeeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the employee?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?',
        },
    ])
};

const employeeType = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'membertype',
            message: 'Which type of team member would you like to add?',
            choices: ['engineer', 'intern', 'I am finished adding members']
        },
    ])
};

const engineerQuestions = () => {
    employeeQuestions()
        .then(() => {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the email of the employee?',
                },
            ])
        })
        .then(data => {
            const `employee_${data.name}` = new Engineer(data.name,data.id,data.email,data.officenumber)

        })
}

module.exports = employeeType,
