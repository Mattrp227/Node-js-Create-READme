// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

      
// TODO: Create an array of questions for user input
const questions = [
  'Project Title?',
  'Project Description?',
  'Any installation required?',
  'Any Tests?',
  

  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, 'utf-8' (err) ==>{
             if(err){
               console.log('err');
               console.log('Success');
}
             }

// TODO: Create a function to initialize app
function init() {
type: 'input',
  message = questions[0],
  name: 'projecttitle',
     validate: projecttitle => {
                if (projecttitle) {
                    return true;
                } else {
                    console.log('Project Title?');
                return false;
                }
            }
     {
       type: 'input',
  message = questions[1],
  name: 'projectdescription',
     }
   {
     type: 'input',
  message = questions[2],
  name: 'projectinstallation',
   }
   {
     type: 'input',
  message = questions[1],
  name: 'projectusage',
   }
}

// Function call to initialize app
init();
