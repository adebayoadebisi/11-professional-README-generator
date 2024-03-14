const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Write a short description of your project:' },
    { type: 'input', name: 'installation', message: 'What are the installation instructions?' },
    { type: 'input', name: 'usage', message: 'How do you use this application?' },
    { type: 'list', name: 'license', message: 'What kind of license should your project have?', choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'] },
    { type: 'input', name: 'contributing', message: 'What are the contribution guidelines?' },
    { type: 'input', name: 'tests', message: 'What are the test instructions?' },
    { type: 'input', name: 'github', message: 'Enter your GitHub Username:' },
    { type: 'input', name: 'email', message: 'Enter your email address:' }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log("README.md generated successfully!");
    });
}

function init() {
    inquirer.prompt(questions).then(answers => writeToFile("README-Test.md", generateMarkdown(answers)));
}

init();
