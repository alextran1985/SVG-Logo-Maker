const { describe } = require('node:test')
const {Circle, Triangle, Square} = require('./shapes')

//Circle Test
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx='50%' cy='50%' r='100' height='100%' width='100%' fill='${this.color}'/>`);
    })
});
//Triangle Test
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color = ('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height='100%' width='100%'points='25,75 75,25 25,25' fill='${this.color}'/>`);
    })
});
//Square Test
describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        var color = ('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect  x='50' height='100' width='100' fill='${this.color}'/>`);
    })
});