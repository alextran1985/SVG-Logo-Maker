const inquirer = require ('inquirer');
const {Circle, Triangle, Square} = require ('./lib/shapes');
const filesystem = require('./node_modules/graceful-fs/graceful-fs');

class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return`<svg version='1.1' xmlns='http://www.w3.org/200/svg width='300'height='200' `
    }
    setTextElement(text,color){
        this.textElement = `<text x='150 y='125 font-size='70' text-anchor='min`
    }
    setShapeElement(shape){
        this.shapElement = shape.render()
    }
}

// This is where the questions begin
const questions = [
{
    type: 'input',
    name: 'text',
    message: 'Text: Please choose 3 Letters:',
}
{
    type: 'input',
    name: 'text',
    message: 'Text: Please choose 3 Letters:',
}
{
    type: 'input',
    name: 'text',
    message: 'Text: Please choose 3 Letters:',
}
{
    type: 'input',
    name: 'text',
    message: 'Text: Please choose 3 Letters:',
}


];

