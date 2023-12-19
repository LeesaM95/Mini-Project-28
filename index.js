const fs = require('fs');
const inquirer = require('inquirer');

// function generateHTML(name) {
//     return ` <html> ${name} </html> `
// }

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where are you from?',
      name: 'location',
    },
    {
        type: 'input',
        message: 'What is your favorite food?',
        name: 'food',
      },
      {
        type: 'input',
        message: 'What is your top future travel destination?',
        name: 'travel',
      },
    
    {
      type: 'input',
      message: 'What makes you unique?',
      name: 'unique',
    },
    {
        type: 'input',
        message: 'What is your Github URL?',
        name: 'github',
      },  {
        type: 'input',
        message: 'What is your LinkedIn URL',
        name: 'linkedin',
      },

  ])
  .then((response) => {
    const htmlPage = generateHTML(response);
      fs.writeFile('index.html', htmlPage, (err) =>
      err? console.error(err) : console.log('Success')
      );
});
