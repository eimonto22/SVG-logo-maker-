const inquirer = require('inquirer');

inquirer.prompt(
    [
        {
            message: 'Type 3 characters',
            name: "logoText",
            type: 'input'  
        },
        {
            message: 'Choose a text color',
            name: 'textColor',
            type: "list",
            choices: ['red', "blue", 'green']
        },
        {
            message: 'Choose a shape',
            name: 'shape',
            type: 'list',
            choices: ['triangle', 'circle', 'square'] 
        } ,
        {
            message: 'Pick a color for the shape',
            name: 'shapeColor',
            type: 'list',
            choices: ['red', "blue", 'green']
        }
    ]
)
.then(answers => {
    if(answers.shape === 'triangle') {
    const shape = `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
<polygon points="200,10 250,190 150,190" style="fill:${answers.shapeColor};stroke:black;stroke-width:3" />
Sorry, your browser does not support inline SVG.
</svg>`
console.log(shape);
    } else if(answers.shape === 'circle') {
        const shape = `<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
        <circle r="45" cx="50" cy="50" fill=${answers.shapeColor} />
      </svg>`
    } else{
        const shape = `<svg width="300" height="170" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="150" x="10" y="10"
        style="fill:${answers.shapeColor};stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" />
      </svg>`
    }
})