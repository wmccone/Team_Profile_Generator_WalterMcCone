const employee = require('./lib/employee')
const manager = require('./lib/manager')
const engineer = require('./lib/engineer')
const intern = require('./lib/intern')
const inquirer = require('inquirer');
const inquirerTemplates = require ('./src/inquirertemplates')
const htmlTemplates = require('./src/htmltemplate')
const fs = require('fs')

//Creates an empty array for any new employee information that is created.
const employeesArray = [];

//Creates an initial set of questions that will be asked for the team manager information.
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
            message: 'What is the employee ID of your manager?',
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
    // This will push the manager data that is collected to a class constructor
        .then(data => {
            const teamManager = new Manager(data.name, data.id, data.email, data.officenumber)
            //pushes the Team manager object to an array
            employeesArray.push(teamManager)
            //runs the employee type question that this program revolves around.
            employeeType()
        })
}

// This question is the main question the user will need to answer to build other team members
const employeeType = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'membertype',
            message: 'Which type of team member would you like to add?',
            choices: ['engineer', 'intern', 'I am finished, print the team']
        },
    ])
    // Once the user selects the type of team member they want to add the program will run a series of questions for that employee type.
        .then(data => {
            switch (data.membertype) {
                //If the user chooses engineer, ask the engineer employee questions.
                case "engineer":
                    engineerQuestions()
                    break;
                //If the user chooses intern, ask the intern employee questions.
                case "intern":
                    internQuestions()
                    break;
                //If the user chooses the finished option, the program will begin the process of printing the html
                default:
                    printContent()
                    break;
            }
        })
};
// This is the set of engineer employee questions.
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
    // This will push the engineer data that is collected to a class constructor
        .then(data => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github)
            //pushes the Engineer object to an array
            employeesArray.push(engineer)
            //Runs the employee type question again to start from the top
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
            // This will push the intern data that is collected to a class constructor
            const intern = new Intern(data.name, data.id, data.email, data.school)
            //Pushes the Engineer object to an array
            employeesArray.push(intern)
            //Runs the employee type question again to start from the top
            employeeType()
        })
}
// This function will write the content to HTML
const printContent = () => {
    //This for loop will iterate through the objects in the employee array
    for (let i = 0; i<employeesArray.length;i++){
        // let roleData = employeesArray[i].getRole()
        //Brings the base HTML template over from the HTML template file
        const htmlTemp = htmlTemplates.htmlTemp;

    //This switch will take the Role from each object in the array and run a card builder on it
        switch(employeesArray[i].getRole()){
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
    fs.writeFile(`${employeesArray[1].name}team.html`, htmlTemp.generateHtml(data), (err) =>
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
