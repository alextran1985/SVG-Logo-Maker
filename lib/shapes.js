class Shape {
  constructor() {
    this.color = '';
    this.text = '';
    this.textColor = '';
  }
  setColor(color) {
    this.color = color;
  }
  setText(text, textColor){
    this.text = text;
    this.textColor = textColor;
  }
  renderText(){
    if(this.text && this.textColor){
      return`<text x='150' y='150' font-size='50'text-anchor='middle' fill='${this.textColor}'>${this.text}</text`;
    }
  }
}
class Circle extends Shape {
  render() {
    return `<circle cx='50%' cy='50%' r='100' height='100%' width='100%' fill='${this.color}'/>`;
  }
}
class Triangle extends Shape {
  render() {
    return `<polygon height='100%' width='100%'points='25,75 75,25 25,25' fill='${this.color}'/>`;
  }
}
class Square extends Shape {
  render() {
    return `<rect  x='50' height='100' width='100' fill='${this.color}'/>`;
  }
}

module.exports = { Circle, Triangle, Square };
