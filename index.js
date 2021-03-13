const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const inquirer = require('inquirer');
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
            validate: function (value) {
                var pass = value.match(
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                );
                if (pass) {
                  return true;
                }
                return 'Please enter a valid email';
            },
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number for the manager?',
            validate: function (value) {
                var pass = value.match(
                  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/i
                );
                if (pass) {
                  return true;
                }
                return 'Please enter a valid phone number';
              },
        },
    ])
    // This will push the manager data that is collected to a class constructor
        .then(data => {
            const teamManager = new Manager(data.name, data.id, data.email, data.officeNumber)
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
                    writeFile()
                    writeCss()
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
            validate: function (value) {
                var pass = value.match(
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                );
                if (pass) {
                  return true;
                }
                return 'Please enter a valid email';
            },
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
            validate: function (value) {
                var pass = value.match(
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                );
                if (pass) {
                  return true;
                }
                return 'Please enter a valid email';
            },
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

    const templateArray = [];
    //Pushing the first part of the HTML code to a storage array
    templateArray.push(htmlTemplates.htmlTemp(employeesArray[0].name))
    //Brings the base HTML template over from the HTML template file
    for (let i = 0; i<employeesArray.length;i++){
        // let roleData = employeesArray[i].getRole()
    //This switch will take the Role from each object in the array and run a card builder on it
        switch(employeesArray[i].getRole()){
            case "Manager":
                templateArray.push(htmlTemplates.managerCard(employeesArray[i]))
                console.log(htmlTemplates.managerCard(employeesArray[i]))
                break;
            case "Engineer":
                templateArray.push(htmlTemplates.engineerCard(employeesArray[i]))
                break;
            case "Intern":
                templateArray.push(htmlTemplates.internCard(employeesArray[i]))
                break;
            default:
                console.log('There was an error with the HTML creation')
                break; 
            
        }
        // return htmlTemp
    }
    // Collect the html into one template literal
    templateArray.push(htmlTemplates.endHtml())
    const finalTemplate = templateArray.join('')
    return finalTemplate
}
//This function is going to write the file to the distribution folder.
const writeFile = () => {
    //this will sanitize the file name so there are no spaces
    let nameArray = employeesArray[0].name.split(' ')
    let fileName = nameArray.join('')
    //this will write the html file to the dist directory and print the content to the file
    fs.writeFile(`./dist/${fileName}team.html`, printContent(), (err) =>
    err ? console.log(err) : console.log("success")
);
}

const printCss = () => {
    return `
    header {
        text-align: center;
        background-color: darkslategray;
        color: beige;
        font-size: 25px;
    
    }
    .card-head {
        background-color: darkslategray;
        color: beige;
        text-align: center;
    }
    .card {
        float: left;
        margin-right: 30px;
        margin-top: 15px;
        max-width: 250px;
        height: 250px;
    }
    
    ul {
        font-size: 14px;
    }
    `
}

const writeCss = () => {
    fs.writeFile(`./dist/style.css`, printCss(), (err) =>
    err ? console.log(err) : console.log("success")
);
}



function init() {
//Welcome message for the user starting the program
    console.log("Welcome to the Team Profile generator, lets build a team!")
//The manager questions function is going to start the function
    managerQuestions()
    
}
init()
