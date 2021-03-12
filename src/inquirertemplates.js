const inquirer = require("inquirer");
const Employee = require('../lib/employee')
const Manager = require('../lib/manager')
const Engineer = require('../lib/engineer')
const Intern = require('../lib/intern');

const employeesArray = [];

const managerQuestions = () => {
    return inquirer.prompt([
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
        employeesArray.push(teamManager)
        employeeType()
    })
}

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
    inquirer.prompt([
        {
            type: 'list',
            name: 'membertype',
            message: 'Which type of team member would you like to add?',
            choices: ['engineer', 'intern', 'I am finished']
        },
    ])
    .then(data => {
        switch(data.membertype){
            case "engineer":
                engineerQuestions()
                break;
            case "intern":
                internQuestions()
                break;
            default:
                //insert write file 
                // writeFile()
                break;
        }
    })
};

const engineerQuestions = () => {
            inquirer.prompt([
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
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is the Github username of the engineer?',
                },
            ])
        .then(data => {
            console.log(data)
            const engineer = new Engineer(data.name,data.id,data.email,data.github)
            employeesArray.push(engineer)
            employeeType()
        });
 
}

const internQuestions = () => {
    employeeQuestions()
        .then(() => {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school does the intern attend?',
                },
            ])
            .then(data => {
                const intern = new Intern(data.name,data.id,data.email,data.school)
                employeesArray.push(intern)
                employeeType()
        })
    })
    }

module.exports = {
    employeeType,
    managerQuestions,
    engineerQuestions,
    internQuestions
}
