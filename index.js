// TODO: Include packages needed for this application
const inquirer = require('inquirer');
var fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Repo Title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributers:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a Licence:',
        choices: ['MIT', 'Apache', 'GNU General Public License', "BSD License", "Creative Commons", "None"],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Testing Information:'
    },
    {
        type: 'input',
        name: 'githubProfile',
        message: 'Your Github Profile Name:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Contact Email:'
    }  
];  

// TODO: Create a function to initialize app
function init() {
    const readmeDir = `./yourNewREADME`
    const readmeFileName = './README.md'

    inquirer.prompt(questions).then(answers => {
        var readmeMarkdown = generateMarkdown(answers)
        if (!fs.existsSync(readmeDir)){
            fs.mkdirSync(readmeDir, { recursive: true }); //recursive set to true for nested directories
        }
        fs.writeFile(`${readmeDir}/${readmeFileName}`, readmeMarkdown, (err)=> err ? console.log(err) : console.log(`Readme File written to ${readmeDir}`))
      });
}

// Function call to initialize app
init()
