const employee = require('./lib/employee')
const manager = require('./lib/manager')
const engineer = require('./lib/engineer')
const intern = require('./lib/intern')
const inquirer = require('inquirer');
const inquirerTemplates = require ('./src/inquirertemplates')
const htmlTemplates = require('./src/htmltemplate')
const fs = require('fs')

//const employeesArray = [];

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
            const teamManager = new Manager(data.name, data.id, data.email, data.officenumber)
            employeesArray.push(teamManager)
            employeeType()
        })
}

const employeeType = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'membertype',
            message: 'Which type of team member would you like to add?',
            choices: ['engineer', 'intern', 'I am finished, print the team']
        },
    ])
        .then(data => {
            switch (data.membertype) {
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
            const engineer = new Engineer(data.name, data.id, data.email, data.github)
            employeesArray.push(engineer)
            employeeType()
        });

}

const internQuestions = () => {

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
            name: 'school',
            message: 'What school does the intern attend?',
        },
    ])
        .then(data => {
            const intern = new Intern(data.name, data.id, data.email, data.school)
            employeesArray.push(intern)
            employeeType()
        })
}

const printContent = () => {
    for (let i = 0; i<employeesArray.length;i++){
        let roleData = employeesArray[i].getRole()
        const htmlTemp = htmlTemplates.htmlTemp;
        switch(roleData){
            case "Manager":
                htmlTemplates.managerCard(employeesArray[i])
                break;
            case "Engineer":
                htmlTemplates.engineerCard(employeesArray[i])
                break;
            case "Intern":
                htmlTemplates.internCard(employeesArray[i])
                break;
            default:
                console.log('There was an error with the HTML creation')
                break;
        }
    }
}

const writeFile = (data) => {
    fs.writeFile(`${data.name}team.html`, htmlTemp.generateHtml(data), (err) =>
    err ? console.log(err) : console.log("success")
);
}



function init() {
//Welcome message
    console.log("Welcome to the Team Profile generator, lets build a team!")
// prompt user for manager information
    managerQuestions()
 

// prompt user for name of next employee
// prompt user for 
    
}
init()
