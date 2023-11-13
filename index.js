const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shape.js');
const Svg = require('./lib/svg.js');

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
    let newSVG = new Svg(data);
    let newShape;
    if (data.shape === 'Circle') {
        newShape = new Circle(data);
    }  else if (data.shape === 'Square') {
        newShape = new Square(data);
    } else if (data.shape === 'Triangle') {
        newShape = new Triangle(data);
    }
    newShape.setColor(data.shapeColor);
    const svgText = newSVG.changeText(data.text, data.textColor);
    const svgShape = newSVG.changeShape(newShape);
    const finalSvg = newSVG.buildSvg(svgText, svgShape);
    if (data.text.length > 3) {
        console.log('Text must be no longer than 3 characters.')
    } else {
        fs.promises.writeFile('./logo.svg', finalSvg);
        console.log('SVG created');
    }
})
.catch(err => console.error(err));