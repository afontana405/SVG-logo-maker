const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shape.js');
const Svg = require('./lib/svg.js');
var answer = [];

inquirer.prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to use?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color should the background be?',
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please enter an acronym of three or less characters?',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color should the text be?',
    },
])
.then((data) => {
    answer = data
})
.then((answer) => {
    let newSVG = new Svg();
    let newShape;
    if (answer.shape === 'Circle') {
        newShape = new Circle();
    }  else if (answer.shape === 'Square') {
        newShape = new Square();
    } else if (answer.shape === 'Triangle') {
        newShape = new Triangle();
    }
    newShape.setColor(answer.shapeColor);
    newSVG.changeText(answer.text, answer.textColor);
    newSVG.changeShape(newShape);
    console.log(newSVG);
})
.catch(err => console.error(err));