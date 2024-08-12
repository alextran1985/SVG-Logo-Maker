const { describe } = require('./shape.test')
const {Circle, Triangle, Square} = require('./shapes')

//Circle Test
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        shape.setColor('green');
        expect(shape.render()).toEqual(`<circle cx='50%' cy='50%' r='100' height='100%' width='100%' fill='green'/>`);
    })
});
//Triangle Test
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        shape.setColor('red');
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"  fill='red'/>`);
    })
});
//Square Test
describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        shape.setColor('blue');
        expect(shape.render()).toEqual(`<rect  x='50' height='100' width='100' fill='blue'/>`);
    })
});