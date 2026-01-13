const { countFourLeggedAnimals } = require('../src/countFourLeggedAnimals');

describe('countFourLeggedAnimals', () => {
 
    // Normal test cases
    test('lion, monkey, deer, snake, elephant', () => {
        expect(countFourLeggedAnimals(['lion', 'monkey', 'deer', 'snake', 'elephant'])).toBe(3);
    });

    test('frog, horse, spider, ant', () => {
        expect(countFourLeggedAnimals(['frog', 'horse', 'spider', 'ant'])).toBe(1);
    });

    test('dog, cat, lion', () => {
        expect(countFourLeggedAnimals(['dog', 'cat', 'lion'])).toBe(3);
    });

    // Edge test cases
    test('empty array', () => {
        expect(countFourLeggedAnimals([])).toBe(0);
    });

    test('unknown animals only', () => {
        expect(countFourLeggedAnimals(['cow', 'dragon'])).toBe(0);
    });

    test('mixed known and unknown', () => {
        expect(countFourLeggedAnimals(['lion', 'dragon', 'cow', 'cat'])).toBe(2);
    });
});
