const fs = require('fs');
const inquirer = require('inquirer');

function generateHTML(name) {
    return ` <html> ${name} </html> `
}