const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");
const fs = require("fs");

class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">`;
  }
  setTextElement(text, color) {
    this.textElement = `<text x='150 y='125 font-size='70' text-anchor='min`;
  }
  setShapeElement(shape) {
    this.shapElement = shape.render();
  }
}

// Ask user questions
const questions = [
  {
    type: "input",
    name: "text",
    message: "Text: Please choose 3 Letters:",
  },
  {
    type: "input",
    name: "text-color",
    message: "What color would you like your text to be?",
  },
  {
    type: "list",
    name: "shape",
    message: "What shape would you like",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shape-color",
    message: "What color would you like you shape to be",
  },
];

//Prompt the questions to the user
inquirer.prompt(questions).then((answers) => {
  let shape;

  switch (answers.shape) {
    case "Circle":
      shape = new Circle();
      break;
    case "Triangle":
      shape = new Triangle();
      break;
    case "Square":
      shape = new Square();
      break;
  }
  shape.setColor(answers.shapeColor);

  const svgContent = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg width="200" height="250"  ">
    ${shape.render()}
    <text x='150'y='125' font-size='60' text-anchor='middle' fill="${
      answers.textColor
    }">${answers.text}</text>
    </svg>`;

  //make sure output exists
  if (!fs.existsSync("output")) {
    fs.mkdirSync("output");
  }
  //Write Svg to the file
  fs.writeFileSync("output/examples.svg", svgContent);
  //let user know the logo was a success
  console.log("Svg logo was successfully create!");
});


