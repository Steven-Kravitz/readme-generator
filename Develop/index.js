// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your application?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your application\'s title!');
                    return false; 
                }
            }
    
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description for your application.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide a description!');
                    return false; 
                }
            }
    
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What steps should users to take install your application?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your installation process!');
                    return false; 
                }
            }   
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions for your apps use.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter usage instructions!');
                    return false; 
                }
            }   
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to include in your readme?',
            choices: ['MIT', 'GNU', 'Apache'],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please select a license!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'features',
            message: 'What features does your app include?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please include some features!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How can you test your application?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please include some tests!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Who would you like to credit in your application?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please add some credits!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please write your full email address.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please add your email!');
                    return false; 
                }
            }
        }
    ])
}
// TODO: Create a function to write README file
const writeToFile = data => {
    fs.writeFile('README.md', data, err => {
        if(err){
            console.log(err);
            return;
        }else {
            console.log('README successfully generated!')
        }
    })
}

// TODO: Create a function to initialize app
    questions()
    .then(answers =>{
        return generateMarkdown(answers)
    })
    .then(data => {
        return writeToFile(data)
    })
    .catch(err => {
        console.log(err)
    })

// Function call to initialize app

