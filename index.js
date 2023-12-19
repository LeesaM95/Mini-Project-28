const fs = require('fs');
const inquirer = require('inquirer');

function generateHTML(name) {
    return ` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Portfolio Generator</title>
    <link rel="stylesheet" href="style.css" />
    </head>
    
    <body>
    <h1>Portfolio Generator</h1>
    <div class="info">
        <div class="name">${name}</div>
        <div class="location">${location}</div>
        <div class="bio">${Bio}</div>
        <div class="linkedin">${linkedIn}:</div>
        <div class="github">${gitHub}:</div>
    </div>
    <script src=".index.js"></script>
    </body>
    </html> `
}

