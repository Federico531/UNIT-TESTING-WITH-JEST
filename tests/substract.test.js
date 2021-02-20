const substract = require('../src/substract');

test('Properly substracts two numbers', () => {
    expect(substract(3,1)).toBe(2);
})