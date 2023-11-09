const iquirer = require('inquirer');
const fs = require('fs');

inquirer.prompr([
    {
        type: 'input',
        name: 'backgroundColor',
        message: 'What color should the background be?',
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please enter an acronym of three or less characters?',
    },
])