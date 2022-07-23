// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please enter a description of your project: ',
            name: 'descript',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Provide instructions for using your project: ',
            name: 'usageIns',
        },
        {
            type: 'input',
            message: 'Did anyone else contribute to this project? If so',
            name: 'whatLearn',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            name: 'installSteps',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use.', 
            name: 'usageInstruct',
        },
        // {
        //     type: 'input',
        //     message: 'Enter the relative pathway to any screenshot images you would like to include.',
        //     name: 'imgPath',
        // },
        {
            type: 'input',
            message: 'Enter any guidelines necessary for any developers who may want to contribute to your project: ',
            name: 'contributing',
        },
        {
            type: 'list',
            message: 'What kind of license would you like to use for your project?',
            choices: ['GNU AGPLv3','GNU GPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT License'],
            name: 'licenseChoice',
        },
        {
            type: 'input',
            message: 'Provide any examples on how to run any tests you may have included for your project here:', 
            name: 'testEx',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'gitUser',
        }
    ])
    .then((data) =>
        writeToFile('README.md',generateMarkdown.generateMarkdown(data))
    );
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, (err) =>
    err ? console.log(err) : console.log('README file created successfully'))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
